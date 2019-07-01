<template>
  <div class="gutter">
    <div class="b1 lcars-bg-rb"></div>
  </div>
</template>

<style scoped lang="scss">
  $gutter-unit: 0.4rem;

  .gutter {
    display: grid;
    grid-template-rows: repeat(auto-fill, [row-start] minmax($gutter-unit, 1fr) [row-end]);
    grid-template-columns: repeat(auto-fill, [gap-start] minmax($gutter-unit, 1fr) [col-end]);
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .b1 {
    grid-area: 20 / 20 / 30 / 30;
  }
</style>
