<template>
  <div class="tooltip">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@keyframes fade-out {
  0% {
    display: block;
    opacity: 1;
  }

  99% {
    display: block;
    opacity: 0.00001;
  }

  100% {
    display: none;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0.000001;
  }

  100% {
    opacity: 1;
  }
}

.tooltip {
  width: auto;
  min-width: 248px;
  padding: 24px 16px;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background: white;
  border-radius: 4px;
  text-align: center;
  color: var(--color-text);
  display: none;
}

.tooltip:not(:hover) {
  animation: 200ms fade-out forwards;
}

.tooltip-trigger:hover+.tooltip,
.tooltip:hover {
  display: block;
  animation: 200ms fade-in forwards;
}
</style>