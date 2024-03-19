<script setup lang="ts">
import { onMounted } from 'vue'
import { loadWidgets, widgets } from './store.js'
import Widget from './components/Widget.vue'
import WidgetSettings from './components/WidgetSettings.vue'

onMounted(loadWidgets)
</script>

<template>
  <section class="background-wrapper">
    <header>
      <h3>Per product widgets</h3>
      <hr />
    </header>

    <main>
      <div class="widget-wrapper" v-for="widget in widgets" :key="widget.id">
        <Widget class="widget" :id="widget.id" />
        <WidgetSettings :id="widget.id" />
      </div>
    </main>
  </section>
</template>

<style scoped lang="scss">
section {
  padding: 36px;
  background: var(--color-background);
  border-radius: 8px;
}

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

.widget-wrapper {
  width: 100%;

  .widget {
    margin-bottom: 20px;
  }
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
