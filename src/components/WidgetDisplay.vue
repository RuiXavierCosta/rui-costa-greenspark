<script setup lang="ts">
import { computed, defineProps } from "vue"

import { WIDGET_TEXT, WIDGET_TEXT_COLOR_CSS_VAR } from "@/constants"
import LogoIcon from "@/components/icons/LogoIcon.vue"
import { state } from "@/store.js"
import type { WidgetColors } from "@/types";


const { id, placeholderColor } = defineProps<{ id?: number, placeholderColor?: WidgetColors }>()
const widget = state.widgets.find(w => w.id === id)
const title = computed(() => widget ? WIDGET_TEXT[widget.type].title(widget.amount) : "")
const subtitle = computed(() => widget ? WIDGET_TEXT[widget.type].subtitle : "")
const color = widget?.selectedColor || placeholderColor || "blue"
const textColor = WIDGET_TEXT_COLOR_CSS_VAR[color]
const backgroundColor = widget ? widget.selectedColor : placeholderColor
</script>

<template>
  <header class="widget-header" :style="{
    color: `var(--color-${textColor})`,
    backgroundColor: `var(--color-${backgroundColor})`
  }">
    <LogoIcon class="logo" :style="{ fill: `var(--color-${textColor})` }" />
    <div class="text-content">
      <p class="subtext" :class="{ 'loading-text': !title }">{{ subtitle }}</p>
      <h5 :class="{ 'loading-text': !title }">{{ title }}</h5>
    </div>
  </header>
</template>

<style scoped lang="scss">
header.widget-header {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  color: var(--color-text-negative);
  border-radius: var(--border-radius);
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 14px;
  padding-left: 12px;
  transition: 200ms background-color, color, border-color;
  margin-bottom: 0;

  .logo {
    width: 40px;
    height: auto;
    margin-right: 12px;
    z-index: 1;
  }

  .text-content {
    z-index: 1;

    .loading-text {
      min-width: 144px;
      background-color: yellow;
      min-height: 1.25em;
      opacity: 0.2;
      animation: loading-text-background 3s ease-in-out infinite;
      border-radius: var(--border-radius);
    }

    .subtext {
      font-size: var(--subtext-size);
      font-weight: var(--subtext-weight);
      margin-bottom: 4px;
    }

    h5 {
      font-size: var(--subtitle-size);
      font-weight: var(--subtitle-weight);
    }
  }

  .forest-animation {
    position: absolute;
    opacity: 0.25;
    bottom: -14px;
    left: 0;
    right: 0;
    z-index: 0;
  }
}

@keyframes loading-text-background {
  0% {
    background-color: var(--loading-color-bright);
  }

  50% {
    background-color: var(--loading-color-mute);
  }

  100% {
    background-color: var(--loading-color-bright);
  }
}
</style>
