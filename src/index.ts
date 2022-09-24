import express from 'express'

class DkExpressApp {
  private app = express()

  constructor() {}

  private _middleware() {}

  private _errorHandle() {}

  private _connect() {}

  private _router() {}

  /**
   * @todo use worker
   */
  start(port = 8080) {
    this.app.listen(port, () => {
      console.log(`${process.env.NODE_ENV} : http://localhost:${port} success`)
    })
  }
}

const app = new DkExpressApp()
app.start()
