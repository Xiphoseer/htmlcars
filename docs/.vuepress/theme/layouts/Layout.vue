<template>
  <lcars-grid-layout class="lcars-fixed" :class="themeClass" title="HTMLCARS" sidebar-title="DOCS">
    <template slot="topbar" class="lcars-chrome-larger">
      <span @click="toggleFullscreen" class="lcars-btn lcars-chrome-primary-alt-1">Fullscreen</span>
      <span @click="toggleTheme" class="lcars-btn lcars-chrome-primary-alt-2">{{theme}}</span>
      <span @click="toggleAlert" class="lcars-btn lcars-chrome-primary-alt-3">Alert</span>
      <span class="lcars-bar-space"></span>
      <a target="_blank" href="https://github.com/Xiphoseer/HTMLCARS" class="lcars-btn lcars-chrome-secondary">Github</a>
      <a target="_blank" href="https://twitter.com/Xiphoseer" class="lcars-btn lcars-chrome-secondary-alt-1">@Xiphoseer</a>
    </template>
    <template slot="sidebar">
      <router-link class="lcars-btn lcars-chrome-primary-alt-1" to="/">Index</router-link>
      <router-link class="lcars-btn lcars-chrome-secondary-alt-2" to="/colors.html">Colors</router-link>
      <router-link class="lcars-btn lcars-chrome-secondary-alt-3" to="/themes.html">Themes</router-link>
      <router-link class="lcars-btn lcars-chrome-primary-alt-2" to="/elements.html">Elements</router-link>
      <router-link class="lcars-btn lcars-chrome-secondary-alt-3" to="/chrome.html">Chrome</router-link>
      <router-link class="lcars-btn lcars-chrome-primary-alt-3" to="/components">Components</router-link>
      <router-link class="lcars-btn lcars-chrome-secondary-alt-1" to="/layouts.html">Layouts</router-link>

      <span class="lcars-bar-space"></span>
      <router-link class="lcars-btn lcars-chrome-primary-alt-2" to="/roadmap.html">Roadmap</router-link>
      <router-link class="lcars-btn lcars-chrome-secondary" to="/about.html">Imprint</router-link>
    </template>
    <div id="lcars-docs-content">
      <Content/>
    </div>
  </lcars-grid-layout>
</template>

<style lang="scss">
  body, html, #app {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    @extend %lcars-body-ref;
  }
</style>

<script>
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
        this.$theme.set(this.theme);
      },
      toggleAlert () {
        this.alert = !this.alert;
      },
      toggleFullscreen() {
        this.$fullscreen.toggle.call(this);
      }
    },
    mounted() {
      const defaultTheme = "uss-na";
      this.$theme = {
        set: function(theme) {
          window.localStorage.setItem('htmlcars-docs-theme', theme)
        }
      };
      this.$fullscreen = {
        set: false,
        available: window && window.document && window.document.fullscreenEnabled,
        toggle() {
          if (this.$fullscreen.available) {
            if (this.$fullscreen.set) {
              window.document.exitFullscreen().then(() => this.$fullscreen.set = false);
            } else {
              window.document.body.requestFullscreen().then(() => this.$fullscreen.set = true);
            }
          }
        }
      };
      this.theme = window.localStorage.getItem('htmlcars-docs-theme') || defaultTheme;
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

  .header-anchor {
    color: red;
    text-decoration: none;
  }
</style>
