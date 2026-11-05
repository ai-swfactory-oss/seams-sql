import { describe, expect, it } from 'vitest'

import { createSeamsSql } from '../src/index'
import { createFakeSeamsSql } from '../src/testing/index'

describe('createSeamsSql', () => {
  it('returns no rows while the seam is a skeleton', () => {
    expect(createSeamsSql().query()).toEqual({ rows: [] })
  })
})

describe('createFakeSeamsSql', () => {
  it('returns no rows by default', () => {
    expect(createFakeSeamsSql().query()).toEqual({ rows: [] })
  })

  it('returns the result it was given', () => {
    const result = { rows: [{ id: 1 }] }
    expect(createFakeSeamsSql(result).query()).toBe(result)
  })
})
