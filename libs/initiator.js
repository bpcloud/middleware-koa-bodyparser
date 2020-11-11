'use strict';

/**
* Copyright (c) 2021 Copyright bp All Rights Reserved.
* Author: brian.li
* Date: 2021-03-11 13:13
* Desc: 
*/


module.exports = function (app, cfg) {
  // body解析.
  app.use(require('koa-bodyparser')({
    onerror: cfg.onErrorBodyParser,
    enableTypes: ['json', 'form', 'text'],
    extendTypes: {
      text: ['application/xml', 'text/xml'],
    }
  }));
}