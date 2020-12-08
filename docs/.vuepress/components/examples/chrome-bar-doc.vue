<template>
  <div class="lcars-docs-grid">
    <h3>Default Button</h3>
    <h3>Default Button Pill</h3>
    <h3>Default Button Left</h3>
    <h3>Default Button Right</h3>

    <button class="lcars-btn text-left">Test</button>
    <button class="lcars-btn lcars-round text-left">Test</button>
    <button class="lcars-btn lcars-round-left text-left">Test</button>
    <button class="lcars-btn lcars-round-right text-left">Test</button>

    <button class="lcars-btn">Test</button>
    <button class="lcars-btn lcars-round">Test</button>
    <button class="lcars-btn lcars-round-left">Test</button>
    <button class="lcars-btn lcars-round-right">Test</button>

    <div class="lcars-clickable lcars-chrome-base">
      <span class="lcars-btn-content lcars-chrome-set">Test</span>
      <h3>00</h3>
      <span class="lcars-btn-content lcars-chrome-set lcars-fill">Test</span>
    </div>
    <div class="lcars-clickable lcars-chrome-base">
      <span class="lcars-btn-content lcars-chrome-set lcars-round-left"
        >Test</span
      >
      <h3>00</h3>
      <span
        class="lcars-btn-content lcars-chrome-set lcars-fill lcars-round-right"
        >Test</span
      >
    </div>
    <div class="lcars-clickable lcars-chrome-base">
      <span class="lcars-btn-content lcars-chrome-set lcars-round-left"
        >Test</span
      >
      <h3>00</h3>
      <span class="lcars-btn-content lcars-chrome-set lcars-fill">Test</span>
    </div>
    <div class="lcars-clickable lcars-chrome-base">
      <span class="lcars-btn-content lcars-chrome-set">Test</span>
      <h3>00</h3>
      <span
        class="lcars-btn-content lcars-chrome-set lcars-fill lcars-round-right"
        >Test</span
      >
    </div>

    <lcars-check v-model="test" class="lcars-clickable lcars-chrome-base">
      <h3>{{ test ? "01" : "00" }}</h3>
      <lcars-toggle :active="test" />
      <span class="lcars-btn-content lcars-chrome-set lcars-fill">Test</span>
      <span class="lcars-chrome-cap-right" />
    </lcars-check>
    <lcars-check v-model="test" class="lcars-clickable lcars-chrome-base">
      <h3>{{ test ? "01" : "00" }}</h3>
      <lcars-toggle :active="test" />
      <lcars-toggle :active="!test" />
      <span class="lcars-btn-content lcars-chrome-set lcars-fill">Test</span>
    </lcars-check>

    <lcars-radio
      v-model="radio"
      variant="A"
      class="lcars-clickable lcars-chrome-base"
    >
      <h3>{{ radio }}</h3>
      <lcars-toggle :active="radio == 'A'" />
      <span class="lcars-btn-content lcars-chrome-set lcars-fill">Test</span>
    </lcars-radio>
    <lcars-radio
      v-model="radio"
      variant="B"
      class="lcars-clickable lcars-chrome-base"
    >
      <h3>{{ radio }}</h3>
      <lcars-toggle :active="radio == 'B'" />
      <span class="lcars-btn-content lcars-chrome-set lcars-fill">Test</span>
    </lcars-radio>
  </div>
</template>

<script>
  export default {
    name: 'chrome-docs',
    data: function () {
      return {
        test: false,
        radio: 'X'
      }
    }
  }
</script>

<style lang="scss">
  .lcars-docs-grid
  {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.4rem;
    margin-bottom: 1rem;
  }
</style>
