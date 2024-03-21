<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { loadWidgets, state } from '@/store.js'
import WidgetDisplay from '@/components/WidgetDisplay.vue'
import WidgetSettings from '@/components/WidgetSettings.vue'

import type { WidgetColors } from "./types"

const loadingWidgetColors: WidgetColors[] = ["beige", "green", "blue"]
const errorFeedback = ref("")
onMounted(async () => {
  loadWidgets().then((data) => {
    if ("error" in data) errorFeedback.value = data.error ?? ""
  })
})
</script>

<template>
  <section>
    <header>
      <h3>Per product widgets</h3>
      <hr />
      <h4 v-if="errorFeedback">{{ errorFeedback }}</h4>
    </header>

    <main>
      <template v-if="state.isLoading || errorFeedback">
        <div class="widget-wrapper" v-for="color in loadingWidgetColors" :key="color">
          <WidgetDisplay class="widget" :placeholderColor="color" />
          <WidgetSettings />
        </div>
      </template>
      <template v-else>
        <div class="widget-wrapper" v-for="widget in state.widgets" :key="widget.id">
          <WidgetDisplay class="widget" :id="widget.id" />
          <WidgetSettings :id="widget.id" />
        </div>
      </template>
    </main>
  </section>
</template>

<style scoped lang="scss">
section {
  padding: 36px;
  background: var(--color-background);
  border-radius: 8px;
  box-shadow: var(--section-drop-shadow);
  min-height: unset;

  @media (min-width: 1024px) {
    min-height: 420px;
  }
}

header {
  line-height: 1.5;
  margin-bottom: 20px;

  h3 {
    font-size: var(--title-size);
    font-weight: var(--title-weight);
    margin-bottom: 12px;
  }

  h4 {
    font-size: var(--subtitle-size);
    font-weight: var(--subtitle-weight);
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
