'use strict';
const path = require('path');
const fs = require('fs');
const ErrorStackParser = require('error-stack-parser');
const { SourceMapConsumer } = require('source-map');
module.exports = class StackPaser {
  constructor(sourceMapDir) {
    this.consumers = {};
    this.sourceMapDir = sourceMapDir;
  }
  parseStackTrack(stack, message) {
    const error = new Error(message);
    error.stack = stack;
    const stackFrame = ErrorStackParser.parse(error);
    return stackFrame;
  }
  async getOriginalErrorStack(stackFrame) {
    const origin = [];
    for (const v of stackFrame) {
      origin.push(await this.getOriginPosition(v));
    }
  }
  async getOriginPosition(stackFrame) {
    let { columnNunmber, lineNumber, fileName } = stackFrame;
    fileName = path.basename(fileName);
    let consumer = this.consumers[fileName];
    if (consumer === undefined) {
      const sourceMapPath = path.resolve(this.sourceMapDir, fileName + '.map');
      if (!fs.existsSync(sourceMapPath)) {
        return stackFrame;
      }
      const content = fs.readFileSync(sourceMapPath, 'utf-8');
      consumer = await new SourceMapConsumer(content, null);
      this.consumers[fileName] = consumer;
    }
    const parseData = consumer.originalPositionFor({ line: lineNumber, colum: columnNunmber });
    return parseData;
  }
};

