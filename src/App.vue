<script setup lang="ts">
import { onMounted } from 'vue'
import { loadWidgets, widgets } from './store.js'
import Widget from './components/Widget.vue'
import WidgetSettings from './components/WidgetSettings.vue'
import type { Widget as WidgetType } from './types'

onMounted(loadWidgets)
const isProfile: boolean = window.location.pathname === '/profile'
</script>

<template>
  <header>
    <h3 v-if="isProfile">Profile example</h3>
    <h3 v-else>Per product widgets</h3>
    <hr />
  </header>

  <main>
    <div class="widget-wrapper" v-for="widget in widgets" :key="widget.id">
      <Widget :class="{ widget: !isProfile }" :id="widget.id" />
      <WidgetSettings v-if="!isProfile" :id="widget.id" />
    </div>
  </main>
  <a v-if="!isProfile" class="floating-button" href="/profile" target="_blank">View Profile</a>
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

.floating-button {
  position: fixed;
  right: 16px;
  bottom: 16px;
  border-radius: 100px;
  text-align: center;
  padding: 8px 16px;
  line-height: 18px;
  font-size: 16px;
  font-weight: 600;
  color: #2d2d2d;
  background-color: #47d18f;
  border: 2px solid transparent;
  &:hover, &:focus {
    border-color: #3b755f;
  }

  @media (min-width: 1024px) {
    padding: 8px 32px;
    line-height: 24px;
    font-size: 20px;
  }
}
</style>
