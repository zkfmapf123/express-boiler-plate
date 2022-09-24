"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DkExpressApp {
  constructor() {
    this.app = (0, _express.default)();
  }

  _middleware() {}

  _errorHandle() {}

  _connect() {}

  _router() {}
  /**
   * @todo use worker
   */


  start(port = 8080) {
    this.app.listen(port, () => {
      console.log(`${process.env.NODE_ENV} : http://localhost:${port} success`);
    });
  }

}

const app = new DkExpressApp();
app.start();