'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _lottery = require('routes/lottery');

var _lottery2 = _interopRequireDefault(_lottery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/lottery', _lottery2.default);

app.listen(3000, function () {
    console.log('start server...');
});

exports.app = app;