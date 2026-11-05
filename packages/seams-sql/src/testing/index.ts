import type { SeamsSql, SqlResult } from '../index'

export const createFakeSeamsSql = (result: SqlResult = { rows: [] }): SeamsSql => ({
  query: () => result,
})
