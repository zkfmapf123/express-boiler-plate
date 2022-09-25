export enum TryType {
  PASS = 'pass',
  FAIL = 'fail',
}

type Pass<T> = {
  readonly _tag: 'pass'
  readonly result: T
  readonly error: null
}

type Fail<T> = {
  readonly _tag: 'fail'
  readonly result: null
  readonly error: T
}

export type Try<E, T> = Pass<T> | Fail<E>

export const passed = <T>(result: T): Try<never, T> => ({
  _tag: 'pass',
  result,
  error: null,
})

export const failed = <T>(error: T): Try<T, never> => ({
  _tag: 'fail',
  result: null,
  error,
})

export const isPass = <T>(t: Try<unknown, T>): t is Pass<T> => t._tag === 'pass'
export const isFail = <T>(t: Try<T, unknown>): t is Fail<T> => t._tag === 'fail'
