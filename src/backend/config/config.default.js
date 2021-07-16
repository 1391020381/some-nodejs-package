/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1626340542807_2145';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 定义前端错误日志
  config.customLogger = {
    frontendLogger: {
      file: path.join(appInfo.root, 'logs/frontend.log'),
    },
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
