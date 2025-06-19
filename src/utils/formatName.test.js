
import { describe, it, expect } from 'vitest'
import { formatName } from './formatName'

describe('formatName', () => {
  it('capitalizes the first letter and lowercases the rest', () => {
    expect(formatName('pIkAcHu')).toBe('Pikachu')
  })

  it('returns empty string when input is null or undefined', () => {
    expect(formatName(null)).toBe('')
    expect(formatName(undefined)).toBe('')
  })
})
