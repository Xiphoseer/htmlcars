<template>
  <div id="app" class="lcars-body">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {}
  };
</script>

<style lang="scss" src="./assets/sass/lcars.scss"></style>

<style lang="scss">
  body, html {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    @extend %lcars-body-ref;
  }

  #app {
    height: 100%;
  }
</style>
