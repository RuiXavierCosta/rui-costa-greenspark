<script setup lang="ts">
import { computed, defineProps } from "vue"

import { widgets } from "../store.js"

const { id } = defineProps({ id: Number })
const widget = computed(() => widgets.value.find(w => w.id === id))
</script>

<template>
  <div class="settings">
    <div class="setting">
    <legend>Link to Public Profile <img class="tooltip" alt="This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it." src="../assets/info_tooltip.svg" /></legend>
    <input v-model="widget.linked" class="checkbox-input" type="checkbox" :name="`link-to-public-${id}`">
    </div>
    
    <div class="setting">
    <legend>Badge colour</legend>
    <fieldset class="badge-colour-selection">
        <input v-model="widget.selectedColor" type="radio" value="blue" :name="`badge-colour-${id}`" checked>
        <input v-model="widget.selectedColor" type="radio" value="green" :name="`badge-colour-${id}`">
        <input v-model="widget.selectedColor" type="radio" value="beige" :name="`badge-colour-${id}`">
        <input v-model="widget.selectedColor" type="radio" value="white" :name="`badge-colour-${id}`">
        <input v-model="widget.selectedColor" type="radio" value="black" :name="`badge-colour-${id}`">
    </fieldset>
    </div>
    
    <div class="setting">
    <legend>Activate badge</legend>
    <input v-model="widget.active" class="toggle-input" type="checkbox" :name="`link-to-public-${id}`">
    </div>
  </div>
</template>

<style scoped lang="scss">
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
      appearance: none;
      margin: 0;
      width: 16px;
      height: 16px;
      border: none;

      width: 16px;
      height: 16px;

      &:checked {
        border: 1.5px solid var(--color-border-grey)
      }

      &[value="blue"] {
        background-color: var(--color-blue);
        &:hover {
          background-color: color-mix(in srgb, var(--color-blue) 80%, transparent);
        }
      }
      &[value="green"] {
        background-color: var(--color-green);
        &:hover {
          background-color: color-mix(in srgb, var(--color-green) 80%, transparent);
        }
      }
      &[value="beige"] {
        background-color: var(--color-beige);
        &:hover {
          background-color: color-mix(in srgb, var(--color-beige) 80%, transparent);
        }
      }
      &[value="white"] {
        background-color: var(--color-white);
        &:hover {
          background-color: color-mix(in srgb, var(--color-white) 80%, transparent);
        }
      }
      &[value="black"] {
        background-color: var(--color-black);
        &:hover {
          background-color: color-mix(in srgb, var(--color-black) 80%, transparent);
        }
      }
    }

    input[type="checkbox"] {
      appearance: none;
      position: relative;
      margin: 0;
      border: none;
    }

    input[type="checkbox"].checkbox-input {
      appearance: none;
      position: relative;
      margin: 0;
      width: 18px;
      height: 18px;
      display: grid;
      place-content: center;
      z-index: 0;
      cursor: pointer;

      &:hover::after {
        background-color:  var(--input-hover-shadow);
      }

      /* Checkbox hover shadow effect */
      &::after {
        content: "";
        position: absolute;
        z-index: 1;
        width: 36px;
        height: 36px;
        border-radius: 100%;
        background-color: transparent;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        transition: 200ms background-color;
      }

      /* Checkbox checkmark */
      &:checked::before {
        background-color: var(--input-active-color);
        border: none;
        stroke: white;
        clip-path: polygon(88.889% 0%,11.111% 0%,11.111% 0%,9.315% 0.146%,7.609% 0.569%,6.016% 1.245%,4.56% 2.151%,3.264% 3.264%,2.151% 4.56%,1.245% 6.016%,0.569% 7.609%,0.146% 9.315%,0% 11.111%,0% 88.889%,0% 88.889%,0.146% 90.685%,0.569% 92.391%,1.245% 93.984%,2.151% 95.44%,3.264% 96.736%,4.56% 97.849%,6.016% 98.755%,7.609% 99.431%,9.315% 99.854%,11.111% 100%,88.889% 100%,88.889% 100%,90.685% 99.854%,92.391% 99.431%,93.984% 98.755%,95.44% 97.849%,96.736% 96.736%,97.849% 95.44%,98.755% 93.984%,99.431% 92.391%,99.854% 90.685%,100% 88.889%,100% 11.111%,100% 11.111%,99.854% 9.315%,99.431% 7.609%,98.755% 6.016%,97.849% 4.56%,96.736% 3.264%,95.44% 2.151%,93.984% 1.245%,92.391% 0.569%,90.685% 0.146%,88.889% 0%,42.833% 73.833%,42.833% 73.833%,42.146% 74.418%,41.395% 74.873%,40.595% 75.198%,39.764% 75.393%,38.917% 75.458%,38.069% 75.393%,37.238% 75.198%,36.439% 74.873%,35.687% 74.418%,35% 73.833%,15.056% 53.889%,15.056% 53.889%,14.471% 53.202%,14.016% 52.45%,13.691% 51.651%,13.496% 50.82%,13.431% 49.972%,13.496% 49.125%,13.691% 48.294%,14.016% 47.494%,14.471% 46.743%,15.056% 46.056%,15.056% 46.056%,15.743% 45.471%,16.494% 45.016%,17.294% 44.691%,18.125% 44.496%,18.972% 44.431%,19.82% 44.496%,20.651% 44.691%,21.45% 45.016%,22.202% 45.471%,22.889% 46.056%,38.889% 62.056%,77.111% 23.833%,77.111% 23.833%,77.798% 23.248%,78.55% 22.793%,79.349% 22.468%,80.18% 22.273%,81.028% 22.208%,81.875% 22.273%,82.706% 22.468%,83.506% 22.793%,84.257% 23.248%,84.944% 23.833%,84.944% 23.833%,85.529% 24.521%,85.984% 25.272%,86.309% 26.071%,86.504% 26.903%,86.569% 27.75%,86.504% 28.597%,86.309% 29.429%,85.984% 30.228%,85.529% 30.979%,84.944% 31.667%,42.833% 73.833%);
      }

      &::before {
        content: "";
        width: 18px;
        height: 18px;
        border: 2px solid var(--color-border-black);
        transition: 200ms border;
        border-radius: 4px;
        background-color: transparent;
        clip-path: none;
        transition: 200ms background-color;
      }
    }

    input[type="checkbox"].toggle-input {
    }

    fieldset.badge-colour-selection {
      border: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      gap: 4px;
    }
  }
}

.widget {
  width: 100%;
}
</style>
