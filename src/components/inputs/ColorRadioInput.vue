<script setup lang="ts">
import { defineProps, defineEmits } from "vue"

const { name, modelValue, colors, disabled } = defineProps<{
  name?: string,
  modelValue?: string,
  colors: string[],
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()
</script>

<template>
  <div class="input-wrapper">
    <slot></slot>
    <fieldset class="badge-colour-selection">
      <input v-for="color in colors" :checked="modelValue === color" type="radio"
        @change="emit('update:modelValue', ($event.target as HTMLInputElement).value)" :value="color" :name="name"
        :key="color" :disabled="disabled" />
    </fieldset>
  </div>
</template>

<style scoped lang="scss">
input[type="radio"] {
  cursor: pointer;
  appearance: none;
  margin: 0;
  width: 16px;
  height: 16px;
  border-color: transparent;

  width: 16px;
  height: 16px;
  transition: 200ms border-color;

  &:checked {
    border: 1.5px solid var(--color-border-grey)
  }

  &:disabled {
    cursor: not-allowed;
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

fieldset.badge-colour-selection {
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 4px;
}
</style>