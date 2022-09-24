import 'reflect-metadata'
import { IController } from '#bases/interfaces'
import { ExampleController } from '#controllers/example.c'
import express, { Router } from 'express'
import helmet from 'helmet'

class DkExpressApp {
  private app = express()

  constructor() {
    this._middleware()
    this._errorHandle()
    this._connect()
    this._router([new ExampleController()])
  }

  private _middleware() {
    this.app.use(helmet())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
  }

  private _errorHandle() {}

  private _connect() {}

  private _router(controllers: IController[]) {
    const router = Router()

    router.get('/', (_, res) => res.send('Hello DK World'))
    controllers.forEach((c) => {
      const [prefix, _router] = c.initRoutes()
      router.use(prefix, _router)
    })
    this.app.use('/v1', router)
  }

  /**
   * @todo use worker
   */
  async start(port = 8080) {
    this.app.listen(port, () => {
      console.log(`${process.env.NODE_ENV} : http://localhost:${port} success`)
    })
  }
}

const app = new DkExpressApp()
app.start()
