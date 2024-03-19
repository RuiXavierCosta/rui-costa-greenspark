<script setup lang="ts">
import { computed, defineProps } from "vue"
import ToggleInput from "./inputs/ToggleInput.vue";
import CheckboxInput from "./inputs/CheckboxInput.vue";
import ColorRadioInput from "./inputs/ColorRadioInput.vue";
import FloatingTooltip from "./FloatingTooltip.vue";

import { widgets, activateWidget } from "../store.js"

const { id } = defineProps({ id: Number })
const widget = computed(() => widgets.value.find(w => w.id === id))
const availableColors = ["blue", "green", "beige", "white", "black"]
</script>

<template>
  <div class="settings">
    <CheckboxInput :name="`link-to-public-${id}`" v-model="widget.linked">
      <span class="tooltip-wrapper">
        Link to Public Profile
        <img class="tooltip-trigger"
          alt="This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it."
          src="../assets/info_tooltip.svg" />
        <FloatingTooltip>
          <p>This widget links directly to your public profile so that you can easily share your impact with your
            customers. Turn it off here if you do not want the badge to link to it.</p>
          <a href="/profile" target="_blank">View Public Profile</a>
        </FloatingTooltip>
      </span>
    </CheckboxInput>

    <div class="setting">
      <ColorRadioInput :modelChecked="widget.selectedColor" @change="(value) => widget.selectedColor = value"
        :name="`badge-colour-${id}`" :colors="availableColors">
        <span>Badge colour</span>
      </ColorRadioInput>
    </div>

    <ToggleInput :name="`link-to-public-${id}`" :modelChecked="widget.active"
      @change="(v) => v && activateWidget(widget.id)">
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
