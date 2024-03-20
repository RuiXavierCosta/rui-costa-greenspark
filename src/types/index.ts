export type WidgetTypes = 'carbon' | 'plastic bottles' | 'trees'
export type WidgetColors = 'white' | 'black' | 'blue' | 'green' | 'beige'

interface WidgetSettings {
  active: boolean
  linked: boolean
  selectedColor: WidgetColors
}

export interface Widget extends WidgetSettings {
  readonly id: number
  readonly type: WidgetTypes
  readonly amount: bigint
  readonly action: 'collects' | 'plants' | 'offsets'
}
