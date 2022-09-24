import dayjs from 'dayjs'

export class DateUtil {
  static getNowUnix() {
    return dayjs().unix()
  }
}
