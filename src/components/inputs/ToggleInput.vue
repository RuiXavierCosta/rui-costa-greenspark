<script setup lang="ts">
import { defineProps, defineEmits } from "vue"

const { id, name, modelValue } = defineProps<{
  id?: string,
  name?: string,
  modelValue: boolean,
  disabled?: boolean,
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void
}>()
</script>

<template>
  <div class="input-wrapper">
    <slot></slot>
    <input :id="id" :name="name" :checked="modelValue"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)" class="toggle-input"
      type="checkbox" :disabled="disabled" />
  </div>
</template>

<style scoped lang="scss">
input[type="checkbox"].toggle-input {
  --border-width: 1px;
  --transition-duration: 200ms;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 0;
  width: 40px;
  height: 20px;
  border: var(--border-width) solid var(--color-border-green-soft);
  box-shadow: inset 0 0 6px var(--input-inset-shadow-color);
  border-radius: 30px;
  background-color: transparent;
  transition: var(--transition-duration) background-color, box-shadow, border-color;

  /* Checkbox is selected, so move ::before to left side */
  &:checked {
    background-color: var(--color-background-accent-2);
    border: var(--border-width) solid var(--color-border-grey);
    box-shadow: none;

    &::before {
      transform: translateX(calc(100% - calc(var(--border-width) * -1)));
      border: var(--border-width) solid var(--color-border-green);
    }
  }

  --nob-size: 20px;

  &::before {
    content: "";
    width: var(--nob-size);
    height: var(--nob-size);
    position: relative;
    z-index: 2;
    transform: translateX(calc(var(--border-width) * -1));
    background-color: white;
    border: 1px solid var(--color-border-beige);
    border-radius: 100%;
    transition: var(--transition-duration) transform, border, background-color;
  }

  /* Checkbox hover shadow effect */
  --shadow-size: 32px;
  --shadow-displacement-left: calc((var(--border-width) * -1) - ((var(--shadow-size) - var(--nob-size)) / 2));
  --shadow-displacement-right: calc(100% - var(--border-width) - (var(--shadow-size) / 2));

  &:not(:disabled):hover::after {
    background-color: var(--input-hover-shadow);
  }

  &:checked::after {
    transform: translateX(var(--shadow-displacement-right)) translateY(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    width: var(--shadow-size);
    height: var(--shadow-size);
    border-radius: 100%;
    background-color: transparent;
    top: 50%;
    right: auto;
    left: 0;
    transform: translateX(var(--shadow-displacement-left)) translateY(-50%);
    transition: var(--transition-duration) transform, background-color;
  }
}
</style>