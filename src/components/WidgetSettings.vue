<script setup lang="ts">
import { computed, defineProps } from "vue"

import ToggleInput from "@/components/inputs/ToggleInput.vue";
import CheckboxInput from "@/components/inputs/CheckboxInput.vue";
import ColorRadioInput from "@/components/inputs/ColorRadioInput.vue";
import FloatingTooltip from "@/components/FloatingTooltip.vue";
import { state, activateWidget } from "@/store.js"


const { id } = defineProps<{ id?: number }>()
const widget = state.widgets.find(w => w.id === id)
const isLinked = computed({
  get() {
    if (!widget) return false
    return widget.linked
  },
  set(value) {
    if (widget) widget.linked = value
  }
})

const selectedColor = computed({
  get() {
    if (!widget || !id) return "blue"
    return widget.selectedColor
  },
  set(value) {
    if (widget) widget.selectedColor = value
  }
})

const isActive = computed({
  get() {
    if (!widget || !id) return false
    return widget.active
  },
  set(value) {
    if (widget && id && value) activateWidget(id)
  }
})
const availableColors = ["blue", "green", "beige", "white", "black"]
</script>

<template>
  <div class="settings">
    <CheckboxInput :disabled="!widget" :name="`link-to-public-${id}`" v-model="isLinked">
      <span class="tooltip-wrapper">
        Link to Public Profile
        <img class="tooltip-trigger"
          alt="This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it."
          src="@/assets/info_tooltip.svg" />
        <FloatingTooltip>
          <p>This widget links directly to your public profile so that you can easily share your impact with your
            customers. Turn it off here if you do not want the badge to link to it.</p>
          <a href="/profile" target="_blank">View Public Profile</a>
        </FloatingTooltip>
      </span>
    </CheckboxInput>

    <div class="setting">
      <ColorRadioInput :disabled="!widget" v-model="selectedColor" :name="`badge-colour-${id}`"
        :colors="availableColors">
        <span>Badge colour</span>
      </ColorRadioInput>
    </div>

    <ToggleInput :disabled="!widget" :name="`link-to-public-${id}`" v-model="isActive">
      <span>Activate badge</span>
    </ToggleInput>
  </div>
</template>

<style scoped lang="scss">
.settings {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;

  // Informational tooltip that appears when the user hovers the "i" after "Link to Public Profile"
  .tooltip-wrapper {
    position: relative;

    p {
      margin: 0px 0px 12px;
    }
  }
}
</style>
