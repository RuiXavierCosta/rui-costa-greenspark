import { describe, test, expect, vi } from 'vitest'
import { loadWidgets, state } from './store.js'

import type { Widget } from './types/index.js'

function mockFetchWidgets(data: Widget[] | null, status?: number) {
  return { json: () => new Promise((resolve) => resolve(data)), status }
}

describe('Widget Store', () => {
  test('should have correct number of widgets', async () => {
    const mockWidgets: Widget[] = [
      {
        id: 1,
        type: 'plastic bottles',
        amount: BigInt(100),
        action: 'collects',
        active: true,
        linked: true,
        selectedColor: 'green'
      },
      {
        id: 2,
        type: 'plastic bottles',
        amount: BigInt(100),
        action: 'collects',
        active: true,
        linked: true,
        selectedColor: 'green'
      },
      {
        id: 3,
        type: 'plastic bottles',
        amount: BigInt(100),
        action: 'collects',
        active: true,
        linked: true,
        selectedColor: 'green'
      },
      {
        id: 4,
        type: 'plastic bottles',
        amount: BigInt(100),
        action: 'collects',
        active: true,
        linked: true,
        selectedColor: 'green'
      }
    ]
    global.fetch = vi.fn().mockResolvedValueOnce(mockFetchWidgets(mockWidgets))

    await loadWidgets()
    expect(state.widgets.length).toStrictEqual(mockWidgets.length)
  })

  test('should have correctly handle empty widget lists', async () => {
    const mockWidgets: Widget[] = []
    global.fetch = vi.fn().mockResolvedValueOnce(mockFetchWidgets(mockWidgets))

    await loadWidgets()
    expect(state.widgets.length).toStrictEqual(0)
  })

  test('should have correctly handle a 500 error', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce(mockFetchWidgets(null, 500))

    await loadWidgets()
    expect(state.widgets.length).toStrictEqual(0)
  })
})
