import { reactive, ref } from "vue"

import type { Widget } from './types'

const widgetData = ref<Widget[]>([])
export const widgets = reactive(widgetData)

export const loadWidgets = async () => {
  // fetch widget info for current user
  const resp = await fetch("https://api.mocki.io/v2/016d11e8/product-widgets")
  if(resp.status >= 300) {
    // TODO: Add error handling
    widgetData.value = []
    return
  }

  widgetData.value = await resp.json()
}
