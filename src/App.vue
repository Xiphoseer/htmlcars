<template>
  <div id="app" class="lcars-body">
    <div class="lcars-grid lcars-grid-merged lcars-chrome-ho">
      <div class="lcars-topbar lcars-chrome-horizontal lcars-chrome-larger lcars-chrome-ho">
        <h1>HTMLCARS</h1>
        <a href="#" onclick="document.body.mozRequestFullScreen();" class="lcars-btn">Fullscreen</a>
        <a href="#" onclick="document.mozCancelFullScreen();" class="lcars-btn lcars-btn-rb">Exit Fullscreen</a>
        <span class="lcars-bar-space"></span>
        <a target="_blank" href="https://github.com/Xiphoseer/HTMLCARS" class="lcars-btn lcars-btn-rb">Github</a>
        <a target="_blank" href="https://twitter.com/Xiphoseer" class="lcars-btn lcars-btn-rb">@Xiphoseer</a>
      </div>
      <div class="lcars-sidebar lcars-chrome-vertical lcars-chrome-ho">
        <h2>Docs</h2>
        <router-link class="lcars-btn lcars-blink-3" to="/">Index</router-link>
        <router-link class="lcars-btn lcars-btn-rb lcars-blink-7" to="/colors">Colors</router-link>
        <router-link class="lcars-btn lcars-btn-be lcars-blink-5" to="/elements">Elements</router-link>
        <router-link class="lcars-btn lcars-btn-pi lcars-blink-6" to="/components">Components</router-link>
        <router-link class="lcars-btn lcars-btn-ap lcars-blink-4" to="/layouts">Layouts</router-link>

        <span class="lcars-bar-space"></span>
        <router-link class="lcars-btn lcars-btn-ap" to="/about">Imprint</router-link>
      </div>
      <router-view class="lcars-grid-content lcars-scroll"/>
      <div class="lcars-bottombar lcars-chrome-horizontal lcars-chrome-ho"></div>
    </div>
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
