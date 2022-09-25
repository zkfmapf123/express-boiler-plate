import _ from 'lodash'

export const passArray = <T>(list: T) => {
  if (_.isArray(list)) return list
  return []
}
