/**
 * @todo use chalk
 */
class Logger {
  /**
   * @todo
   */
  private memoryLogging() {}

  /**
   * @todo
   */
  private fileLogging() {}

  private convertLoggingMsg(msg: string, data?: string): string {
    if (!data) {
      return msg
    }
    return `${msg}\n${JSON.stringify(data)}`
  }

  log(msg: string, data?: any) {
    console.log(this.convertLoggingMsg(msg, data))
  }

  debug(msg: string, data?: any) {
    console.log(this.convertLoggingMsg(msg, data))
  }

  warn(msg: string, data?: any) {
    console.log(this.convertLoggingMsg(msg, data))
  }

  error(msg: string, data?: any) {
    console.log(this.convertLoggingMsg(msg, data))
  }
}

export const logger = new Logger()
