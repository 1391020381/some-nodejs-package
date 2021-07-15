'use strict';
const Controller = require('egg').Controller;
class MonitorController extends Controller {
  async index() {
    const { ctx } = this;
    const { info } = ctx.query;
    const json = JSON.parse(Buffer.from(info, 'base64').toString('utf-8'));
    console.log('fronterror:', json);
    ctx.body = json;
  }
}

module.exports = MonitorController;
