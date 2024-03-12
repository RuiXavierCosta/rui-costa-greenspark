<script setup lang="ts">
import { onMounted } from 'vue'
import {loadWidgets, widgets} from './store.js'
import Widget from './components/Widget.vue'
import type { Widget as WidgetType } from './types'

onMounted(loadWidgets)
</script>

<template>
  <header>
    <h3>Per product widgets</h3>
    <hr />
  </header>

  <main>
    <Widget v-for="widget in widgets" :key="widget.id" :id="widget.id" />
  </main>
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  margin-bottom: 20px;

  h3 {
    font-weight: bold;
    font-size: var(--title-size);
    font-weight: var(--title-weight);
    margin-bottom: 12px;
  }

  hr {
    width: 100%;
    background: var(--color-background-mute);
    height: 2px;
    border: none;
  }
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 36px;
  padding: 0 20px;
}

@media (min-width: 1024px) {
  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    align-items: start;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 50px;
    place-items: center;
    align-items: start;
    padding: 0;
  }
}
</style>
