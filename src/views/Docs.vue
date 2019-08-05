<template>
  <lcars-grid-layout class="lcars-fixed" :class="themeClass" title="HTMLCARS" sidebar-title="DOCS">
    <template slot="topbar" class="lcars-chrome-larger"> <!---->
      <span @click="toggleFullscreen" class="lcars-btn lcars-chrome-primary-alt-1">Fullscreen</span>
      <span @click="toggleTheme" class="lcars-btn lcars-chrome-primary-alt-2">{{theme}}</span>
      <span @click="toggleAlert" class="lcars-btn lcars-chrome-primary-alt-3">Alert</span>
      <span class="lcars-bar-space"></span>
      <a target="_blank" href="https://github.com/Xiphoseer/HTMLCARS" class="lcars-btn lcars-chrome-secondary">Github</a>
      <a target="_blank" href="https://twitter.com/Xiphoseer" class="lcars-btn lcars-chrome-secondary-alt-1">@Xiphoseer</a>
    </template>
    <template slot="sidebar">
      <router-link class="lcars-btn lcars-chrome-primary-alt-1" to="/">Index</router-link>
      <router-link class="lcars-btn lcars-chrome-secondary-alt-2" to="/colors">Colors</router-link>
      <router-link class="lcars-btn lcars-chrome-secondary-alt-3" to="/themes">Themes</router-link>
      <router-link class="lcars-btn lcars-chrome-primary-alt-2" to="/elements">Elements</router-link>
      <router-link class="lcars-btn lcars-chrome-secondary-alt-3" to="/chrome">Chrome</router-link>
      <router-link class="lcars-btn lcars-chrome-primary-alt-3" to="/components">Components</router-link>
      <router-link class="lcars-btn lcars-chrome-secondary-alt-1" to="/layouts">Layouts</router-link>

      <span class="lcars-bar-space"></span>
      <router-link class="lcars-btn lcars-chrome-primary-alt-2" to="/roadmap">Roadmap</router-link>
      <router-link class="lcars-btn lcars-chrome-secondary" to="/about">Imprint</router-link>
    </template>
    <router-view id="lcars-docs-content"/>
  </lcars-grid-layout>
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
        cls["lcars-chrome-crt-green"] = (this.theme == "crt-green");
        cls["lcars-chrome-crt-amber"] = (this.theme == "crt-amber");
        cls["lcars-chrome-year-2357"] = (this.theme == "year 2357");
        cls["lcars-chrome-year-2369"] = (this.theme == "year 2369");
        cls["lcars-chrome-year-2375"] = (this.theme == "year 2375");
        cls["lcars-chrome-year-2379"] = (this.theme == "year 2379");
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
        next["voyager"] = "year 2357";
        next["year 2357"] = "year 2369";
        next["year 2369"] = "year 2375";
        next["year 2375"] = "year 2379";
        next["year 2379"] = "default";
        next["default"] = "crt-green";
        next["crt-green"] = "crt-amber";
        next["crt-amber"] = "uss-na";
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
    right: -0.5rem;
    width: 0.3rem;
    top: 0;
    height: 100%;
    /*border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;*/
    background-color: var(--lcars-chrome-bg);
  }

  .lcars-btn.router-link-exact-active:hover::after,
  .lcars-btn.router-link-exact-active:focus::after,
  .lcars-btn.router-link-exact-active:active::after
  {
    background-color: var(--lcars-chrome-bg-light);
  }


</style>
