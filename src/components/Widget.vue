<script setup lang="ts">
import { computed, getCurrentInstance } from "vue"

import { WIDGET_TEXT, WIDGET_TEXT_COLOR_CSS_VAR } from "../constants"
import LogoIcon from "./icons/LogoIcon.vue"
import WidgetSettings from './WidgetSettings.vue'
import { widgets } from "../store.js"
import { Widget } from "../types"

const { key } = getCurrentInstance().vnode

const widget = computed(() => widgets.value.find(w => w.id === key))
const title = computed(() => WIDGET_TEXT[widget.value.type].title(widget.value.amount))
const subtitle = computed(() => WIDGET_TEXT[widget.value.type].subtitle)
</script>

<template>
  <div class="widget">
    <header
      class="widget-header"
      :style="{
        color: `var(--color-${WIDGET_TEXT_COLOR_CSS_VAR[widget.selectedColor]})`,
        backgroundColor: `var(--color-${widget.selectedColor})`
      }"
      >
      <LogoIcon
        class="logo"
        :style="{ fill: `var(--color-${WIDGET_TEXT_COLOR_CSS_VAR[widget.selectedColor]})` }"
      />
      <div class="text-content">
        <p class="subtext">{{ subtitle }}</p>
        <h5>{{ title }}</h5>
      </div>
    </header>
    <WidgetSettings :id="key" />
  </div>
</template>

<style scoped lang="scss">
header.widget-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: red;
  color: var(--color-text-negative);
  border-radius: var(--border-radius);
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 14px;
  padding-left: 12px;

  .logo {
    width: 40px;
    height: auto;
    margin-right: 12px;
  }

  .text-content {
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
}

.widget {
  width: 100%;
}
</style>
