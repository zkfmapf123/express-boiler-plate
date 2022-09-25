import { FunctionException } from '#bases/error'
import { failed, passed, Try } from '#bases/try'
import { logger } from '#utils/logger.u'
import mysql from 'mysql2/promise'
import _ from 'lodash'

/**
 * use dotenv
 */
export class DB {
  private conn(): mysql.Pool {
    const dbConn = mysql.createPool({
      host: '127.0.0.1',
      user: 'root',
      password: 'test',
      database: 'deliver',
      connectTimeout: 5000,
      connectionLimit: 30, // default 10
      waitForConnections: true,
    })
    return dbConn
  }

  async query<E, T>(query: string, dbParams?: string[]): Promise<Try<E, T>> {
    let co = null

    try {
      co = await this.conn().getConnection()

      const [result] = await co.query(query, dbParams ?? null)

      if (_.isArray(result) && result.length > 0) {
        // Model
        if (result.length === 1) {
          const [obj] = result
          return <Try<E, T>>passed(obj)
        }

        // Models
        return <Try<E, T>>passed(result)
      }

      return <Try<E, T>>passed(null)
    } catch (e) {
      logger.error(FunctionException('db'), e)
      return <Try<E, T>>failed({
        msg: FunctionException('db'),
        data: e,
      })
    } finally {
      co?.release()
    }
  }

  /**
   * trnsaction
   */
  async txQuery(query: string) {}
}
