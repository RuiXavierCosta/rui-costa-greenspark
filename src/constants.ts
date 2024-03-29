import type { WidgetTypes, WidgetColors } from '@/types'

type WidgetText = {
  [t in WidgetTypes]: {
    title: (amount?: bigint) => string
    subtitle: string
  }
}

export const WIDGET_TEXT: WidgetText = {
  carbon: {
    title: (amount?: bigint) => `${amount || 0}kgs of carbon`,
    subtitle: 'This product offset'
  },
  'plastic bottles': {
    title: (amount?: bigint) => `${amount || 0} plastic bottles`,
    subtitle: 'This product collects'
  },
  trees: { title: (amount?: bigint) => `${amount || 0} trees`, subtitle: 'This product plants' }
}

type WidgetTextColor = {
  [c in WidgetColors]: string
}

export const WIDGET_TEXT_COLOR_CSS_VAR: WidgetTextColor = {
  white: 'green',
  black: 'white',
  blue: 'white',
  green: 'white',
  beige: 'green'
}
