export type SqlRow = Readonly<Record<string, unknown>>

export interface SqlResult {
  readonly rows: readonly SqlRow[]
}

export interface SeamsSql {
  readonly query: () => SqlResult
}

export const createSeamsSql = (): SeamsSql => ({
  query: () => ({ rows: [] }),
})
