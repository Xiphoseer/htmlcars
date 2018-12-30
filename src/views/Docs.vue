<template>
  <div class="lcars-grid lcars-grid-merged" :class="themeClass">
    <div class="lcars-topbar lcars-chrome-horizontal lcars-chrome-larger">
      <h1>HTMLCARS</h1>
      <button type="button" @click="toggleFullscreen" class="lcars-btn lcars-chrome-primary-alt-1">Fullscreen</button>
      <button type="button" @click="toggleTheme" class="lcars-btn lcars-chrome-primary-alt-2">{{theme}}</button>
      <button type="button" @click="toggleAlert" class="lcars-btn lcars-chrome-primary-alt-3">Alert</button>
      <span class="lcars-bar-space"></span>
      <a target="_blank" href="https://github.com/Xiphoseer/HTMLCARS" class="lcars-btn lcars-chrome-secondary">Github</a>
      <a target="_blank" href="https://twitter.com/Xiphoseer" class="lcars-btn lcars-chrome-secondary-alt-1">@Xiphoseer</a>
    </div>
    <div class="lcars-sidebar lcars-chrome-vertical">
      <h2>Docs</h2>
      <router-link class="lcars-btn lcars-chrome-primary-alt-1" to="/">Index</router-link>
      <router-link class="lcars-btn lcars-chrome-secondary-alt-2" to="/colors">Colors</router-link>
      <router-link class="lcars-btn lcars-chrome-primary-alt-2" to="/elements">Elements</router-link>
      <router-link class="lcars-btn lcars-chrome-primary-alt-3" to="/components">Components</router-link>
      <router-link class="lcars-btn lcars-chrome-secondary-alt-1" to="/layouts">Layouts</router-link>

      <span class="lcars-bar-space"></span>
      <router-link class="lcars-btn lcars-chrome-secondary" to="/about">Imprint</router-link>
    </div>
    <div class="lcars-grid-content lcars-v-scroll">
      <router-view id="lcars-docs-content"/>
    </div>
    <div class="lcars-bottombar lcars-chrome-horizontal"></div>
  </div>
</template>

<script>
  import fullscreen from 'vue-fullscreen'
  import Vue from 'vue'
  Vue.use(fullscreen)

  export default {
    computed: {
      themeClass: function() {
        var cls = {};
        cls["lcars-chrome-uss-na"] = (this.theme == "uss-na");
        cls["lcars-chrome-voyager"] = (this.theme == "voyager");
        cls["lcars-chrome-red-alert"] = this.alert;
        return cls;
      }
    },
    methods: {
      toggleFullscreen () {
        let el = document.body;
        this.$fullscreen.toggle(el, {
          wrap: false,
          callback: this.fullscreenChange
        })
      },
      fullscreenChange (fullscreen) {
        this.fullscreen = fullscreen
      },
      toggleTheme () {
        var next = {};
        next["uss-na"] = "voyager";
        next["voyager"] = "default";
        next["default"] = "uss-na";
        this.theme = next[this.theme];
      },
      toggleAlert () {
        this.alert = !this.alert;
      }
    },
    data() {
      return {
        fullscreen: false,
        theme: "uss-na",
        alert: false
      }
    }
  }
</script>

<style lang="scss">
  #lcars-docs-content
  {
    margin: 0.2rem auto;
    max-width: 50rem;
  }

  .lcars-btn.router-link-active
  {
    position: relative;
  }

  .lcars-btn.router-link-exact-active::after
  {
    content: "";
    position: absolute;
    display: block;
    right: -1rem;
    width: 1rem;
    top: 0;
    height: 100%;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: var(--lcars-chrome-bg);
  }

  .lcars-btn.router-link-exact-active:hover::after,
  .lcars-btn.router-link-exact-active:focus::after,
  .lcars-btn.router-link-exact-active:active::after
  {
    background-color: var(--lcars-chrome-bg-light);
  }


</style>
