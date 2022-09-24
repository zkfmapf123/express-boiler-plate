import { Request, Response, Router } from 'express'
import { IController } from '#bases/interfaces'
import { Controller } from '#decorators/class'

enum ExampleParams {
  EXAMPLE = '/ex',
  GET = '/get',
  SET = '/set',
}

@Controller(ExampleParams.EXAMPLE)
export class ExampleController implements IController {
  _prefix: string = ExampleParams.EXAMPLE

  initRoutes(): [string, Router] {
    const router = Router()
    router.get(ExampleParams.GET, this.getEx)
    router.get(ExampleParams.SET, this.setEx)
    return [ExampleParams.EXAMPLE, router]
  }

  /**
   * @todo use Decorators
   */
  async getEx(req: Request, res: Response) {
    console.log(req.body.data)
    res.send('leedonggyu')
  }

  async setEx(req: Request, res: Response) {}
}
