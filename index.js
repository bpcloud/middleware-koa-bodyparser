'use strict';

/**
* Copyright (c) 2021 Copyright bp All Rights Reserved.
* Author: brian.li
* Date: 2021-03-11 13:53
* Desc: 
*/

var afterRoute = require('./libs/afterRoute');
var beforeRoute = require('./libs/beforeRoute');
var initiator = require('./libs/initiator');

exports.name = 'middleware-koa-bodyparser';

exports.middleware = function (cfg) {

  cfg = cfg || {};
  cfg.onErrorBodyParser = cfg.onErrorBodyParser || ((err, ctx) => {
    ctx.response.status = 415;
  });

  return {
    type: 'koa',
    name: exports.name,
    afterRoute,
    beforeRoute,
    initiator: (app) => {
      return initiator(app, cfg);
    }
  };
}