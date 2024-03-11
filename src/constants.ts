import type { WidgetTypes, WidgetColors } from "./types"

type WidgetText = {
    [t in WidgetTypes ]: {
        title: (amount?: string) => string;
        subtitle: string,
    }
}

export const WIDGET_TEXT: WidgetText = {
    "carbon": { title: (amount?: string) => `${amount || 0}kgs of carbon`, subtitle: "This product offset" },
    "plastic bottles": { title: (amount?: string) => `${amount || 0} plastic bottles`, subtitle: "This product collects" },
    "trees": { title: (amount?: string) => `${amount || 0} trees`, subtitle: "This product plants" }
}

type WidgetTextColor = {
    [c in WidgetColors]: string
}

export const WIDGET_TEXT_COLOR_CSS_VAR: WidgetTextColor = {
    "white": "var(--color-text-alt)",
    "black": "var(--color-text-negative)",
    "blue": "var(--color-text-negative)",
    "green": "var(--color-text-negative)",
    "beige": "var(--color-text-alt)",
}
