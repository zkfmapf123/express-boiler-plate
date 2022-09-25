import { logger } from '#utils/logger.u'

export function Controller(msg: string) {
  logger.log(msg)

  return (target: any) => {}
}
