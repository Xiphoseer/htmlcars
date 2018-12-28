<template>
  <div id="app" class="lcars-body">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body, html {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    @extend %lcars-body;
  }

  .lcars-scroll {
    overflow-y: scroll;
    padding-right: 1.5rem;
  }

  #app {
    height: 100%;
  }
</style>
