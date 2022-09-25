// Error
export type ErrorType = {
  msg: string
  data?: any
}

// Exception
export const FunctionException = (msg?: string) => `Funciton Exception : ${msg}`
