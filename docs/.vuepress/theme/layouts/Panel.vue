<template>
  <div class="lcars-page lcars-chrome-voyager lcars-fixed">
    <div class="lcars-chrome-horizontal lcars-topbar">
      <h1>LCARS</h1>
      <router-link to="/" class="lcars-btn">Home</router-link>
      <a class="lcars-btn lcars-btn-pi">Reset</a>
      <span class="lcars-bar-space"></span>
    </div>
    <Content id="panel-content" class="lcars-grid-content" />
    <div class="lcars-chrome-horizontal lcars-bottombar">
      <a class="lcars-btn">123</a>
      <a class="lcars-btn">ABC</a>
      <span class="lcars-bar-space"></span>
      <h1>Console 1337</h1>
    </div>
  </div>
</template>

<style lang="scss">
  body {
    @extend %lcars-body-ref;
  }

  body, html, #app {
    height: 100%;
    box-sizing: border-box;
  }
</style>
