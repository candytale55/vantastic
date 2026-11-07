import { describe, expect, it } from 'vitest'
import { getFilteredVans } from './filters.js'

const vans = [
    { id: '1', type: 'esencial' },
    { id: '2', type: 'viajera' },
    { id: '3', type: 'viajera' },
]

describe('getFilteredVans', () => {
    it('returns all vans when no filters are active', () => {
        expect(getFilteredVans(vans, null, false, [])).toEqual(vans)
    })

    it('filters vans by type', () => {
        expect(getFilteredVans(vans, 'viajera', false, [])).toEqual([
            { id: '2', type: 'viajera' },
            { id: '3', type: 'viajera' },
        ])
    })

    it('filters only favorite vans', () => {
        expect(getFilteredVans(vans, null, true, ['1', '3'])).toEqual([
            { id: '1', type: 'esencial' },
            { id: '3', type: 'viajera' },
        ])
    })

    it('combines type and favorites filters', () => {
        expect(getFilteredVans(vans, 'viajera', true, ['1', '2'])).toEqual([
            { id: '2', type: 'viajera' },
        ])
    })
})
