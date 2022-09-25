import { IModels } from '#bases/interface'
import { isFail } from '#bases/try'
import { DB } from '#configs/db.config'
import { passArray } from '#utils'
import { pipe } from 'fp-ts/function'
import { ClazzOrModelSchema, deserialize } from 'serializr'

interface ModelMapperParams {
  query: string
  params?: string[]
}

export const modelMapper = async <E, K, M extends IModels>(
  { query, params }: ModelMapperParams,
  schema: ClazzOrModelSchema<M>
): Promise<M | null> => {
  const db = new DB()
  const t = await db.query<E, K>(query, params)

  if (isFail(t)) {
    return null
  }

  return deserialize(schema, t.result) ?? null
}

export const modelsMapper = async <E, K, M>(
  { query, params }: ModelMapperParams,
  schema: ClazzOrModelSchema<M>
): Promise<M[] | null> => {
  const db = new DB()
  const t = await db.query<E, K>(query, params)

  if (isFail(t)) {
    return null
  }

  return pipe(passArray(t.result), (lists) => lists.map((list) => deserialize(schema, list)))
}
