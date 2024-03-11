<script setup lang="ts">
import { computed, getCurrentInstance } from "vue"

import { WIDGET_TEXT, WIDGET_TEXT_COLOR_CSS_VAR } from "../constants"
import LogoIcon from "./icons/LogoIcon.vue"
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
      :style="{ color: WIDGET_TEXT_COLOR_CSS_VAR[widget.selectedColor], backgroundColor: `var(--color-${widget.selectedColor})` }"
      >
      <LogoIcon :style="{ color: WIDGET_TEXT_COLOR_CSS_VAR[widget.selectedColor] }"/>
      <div class="text-content">
        <p class="subtext">{{ subtitle }}</p>
        <h5>{{ title }}</h5>
      </div>
    </header>
    
    <div class="settings">
      <div class="setting">
        <legend>Link to Public Profile <img class="tooltip" alt="This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it." src="../assets/info_tooltip.svg" /></legend>
        <input v-model="widget.linked" type="checkbox" :name="`link-to-public-${key}`">
      </div>
      
      <div class="setting">
        <legend>Badge colour</legend>
        <fieldset>
          <input v-model="widget.selectedColor" type="radio" value="blue" :name="`badge-colour-${key}`" checked>
          <input v-model="widget.selectedColor" type="radio" value="green" :name="`badge-colour-${key}`">
          <input v-model="widget.selectedColor" type="radio" value="beige" :name="`badge-colour-${key}`">
          <input v-model="widget.selectedColor" type="radio" value="white" :name="`badge-colour-${key}`">
          <input v-model="widget.selectedColor" type="radio" value="black" :name="`badge-colour-${key}`">
        </fieldset>
      </div>
        
      <div class="setting">
        <legend>Activate badge</legend>
        <input v-model="widget.active" type="checkbox" :name="`link-to-public-${key}`">
      </div>
    </div>
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

  .text-content {
    .subtext {
      font-size: var(--subtext-size);
      font-weight: var(--subtext-weight);
    }

    h5 {
      font-size: var(--subtitle-size);
      font-weight: var(--subtitle-weight);
    }
  }
}

.settings {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;

  .setting {
    color: var(--color-text-alt);
    border: none;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    input[type="radio"] {
      margin: 0;
    }
    fieldset {
      border: none;
      margin: 0;
      padding: 0;
    }
  }
}

.widget {
  width: 100%;
}
</style>
