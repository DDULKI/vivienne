"use strict";

// setupProxy.js  파일이름
var _require = require('http-proxy-middleware'),
    createProxyMiddleware = _require.createProxyMiddleware;

module.exports = function (WrapComponent) {
  WrapComponent.use("/signup_db", createProxyMiddleware({
    "target": "http://ddulki.dothome.co.kr",
    changeOrigin: true
  }));
  WrapComponent.use("/jsp", createProxyMiddleware({
    "target": "http://localhost:8080",
    changeOrigin: true
  }));
  WrapComponent.use("/public", createProxyMiddleware({
    "target": "http://127.0.0.1:5501",
    changeOrigin: true
  }));
};
//# sourceMappingURL=setupProxy.dev.js.map
