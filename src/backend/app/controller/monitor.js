'use strict';
const path = require('path');
const fs = require('fs');
const Controller = require('egg').Controller;
const StackParser = require('../utils/stackparser');
class MonitorController extends Controller {
  async index() {
    const { ctx } = this;
    const { info } = ctx.query;
    const json = JSON.parse(Buffer.from(info, 'base64').toString('utf-8'));
    console.log('fronterror:', json);
    // ctx.getLogger('frontendLogger').error(json);
    // 转换源码位置
    const stackParser = new StackParser(path.join(this.config.baseDir, 'uploads'));
    const stackFrame = stackParser.parseStackTrack(json.stack, json.message);
    const originStack = await stackParser.getOriginalErrorStack(stackFrame);
    ctx.getLogger('frontendLogger').error(json, originStack);
    // 转换源码位置
    ctx.body = json;
  }
  async upload() {
    const { ctx } = this;
    const stream = ctx.req;
    const filename = ctx.query.name;
    const dir = path.join(this.config.baseDir, 'uploads');
    console.log(dir, fs.existsSync(dir), '-------------------');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const target = path.join(dir, filename);
    const writeStream = fs.createWriteStream(target);
    stream.pipe(writeStream);
  }
}

module.exports = MonitorController;
