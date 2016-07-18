'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.views = exports.bodyparser = exports.Router = exports.statics = exports.morgan = exports.cors = exports.favicon = exports.etag = exports.conditionalGet = exports.compress = exports.responseTime = undefined;

var _koaResponseTime = require('koa-response-time');

var _koaResponseTime2 = _interopRequireDefault(_koaResponseTime);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _koaConditionalGet = require('koa-conditional-get');

var _koaConditionalGet2 = _interopRequireDefault(_koaConditionalGet);

var _koaEtag = require('koa-etag');

var _koaEtag2 = _interopRequireDefault(_koaEtag);

var _koaFavicon = require('koa-favicon');

var _koaFavicon2 = _interopRequireDefault(_koaFavicon);

var _kcors = require('kcors');

var _kcors2 = _interopRequireDefault(_kcors);

var _koaMorgan = require('koa-morgan');

var _koaMorgan2 = _interopRequireDefault(_koaMorgan);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaViews = require('koa-views');

var _koaViews2 = _interopRequireDefault(_koaViews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.responseTime = _koaResponseTime2.default;
exports.compress = _koaCompress2.default;
exports.conditionalGet = _koaConditionalGet2.default;
exports.etag = _koaEtag2.default;
exports.favicon = _koaFavicon2.default;
exports.cors = _kcors2.default;
exports.morgan = _koaMorgan2.default;
exports.statics = _koaStatic2.default;
exports.Router = _koaRouter2.default;
exports.bodyparser = _koaBodyparser2.default;
exports.views = _koaViews2.default;

