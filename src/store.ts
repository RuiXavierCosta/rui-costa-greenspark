import { reactive, ref } from 'vue'

import type { Widget } from '@/types'

const isLoading = ref<boolean>(false)
const widgetData = ref<Widget[]>([])
export const state = reactive({
  widgets: widgetData,
  isLoading
})

export const activateWidget = (id: number): void => {
  state.widgets.forEach((w) => {
    if (w.id === id) return (w.active = true)
    w.active = false
  })
}

export const loadWidgets = async () => {
  isLoading.value = true
  // fetch widget info for current user
  try {
    const resp = await fetch('https://api.mocki.io/v2/016d11e8/product-widgets')
    if (resp.status >= 300) {
      // TODO: Add error handling
      widgetData.value = []
      return
    }

    widgetData.value = await resp.json()
  } catch (error) {
    console.log('ffff', error)
  } finally {
    isLoading.value = false
    // isLoading.value = false
  }
}
