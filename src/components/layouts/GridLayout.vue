<template>
  <div v-if="state == 'default'" class="lcars-grid lcars-grid-merged">
    <div class="lcars-topbar lcars-chrome-horizontal lcars-chrome-larger">
      <slot name="topbar"/>
    </div>
    <div class="lcars-sidebar lcars-chrome-vertical">
      <slot name="sidebar"/>
    </div>
    <div class="lcars-grid-content lcars-v-scroll">
      <slot name="default"/>
    </div>
    <div class="lcars-bottombar lcars-chrome-horizontal">
      <slot name="bottombar"/>
    </div>
  </div>
  <div v-else-if="state == 'menu'" class="lcars-page" :class="[pageClass]">
    <div class="lcars-topbar lcars-chrome-horizontal">
      <h1>Menu</h1>
    </div>
    <div class="lcars-grid-content lcars-button-grid lcars-hide-bar-space">
      <slot name="topbar"/>
      <slot name="sidebar"/>
      <slot name="bottombar"/>
    </div>
    <div class="lcars-bottombar lcars-chrome-horizontal">
      <span @click="setState('reduced')" class="lcars-btn">Back</span>
    </div>
  </div>
  <div v-else-if="state == 'reduced'" class="lcars-page" :class="[pageClass]">
    <div class="lcars-topbar lcars-chrome-horizontal">
      <h1>htmLCARS</h1>
      <span class="lcars-bar-space"/>
      <h1>Docs</h1>
    </div>
    <div class="lcars-grid-content lcars-v-scroll">
      <slot/>
    </div>
    <div class="lcars-bottombar lcars-chrome-horizontal">
      <span @click="setState('menu')" class="lcars-btn">Menu</span>
      <span class="lcars-btn lcars-chrome-secondary">{{size.x}} {{size.y}} {{state}}</span>
    </div>
  </div>
  <div v-else-if="state == 'tiled'" class="lcars-slide lcars-chrome-small">
    <!--<div class="lcars-chrome-horizontal lcars-topbar">

    </div>-->
    <!--<div class="lcars-chrome-horizontal lcars-bottombar">

    </div>-->
    <div class="lcars-chrome-vertical lcars-midline">

    </div>
    <div class="lcars-button-grid lcars-hide-bar-space lcars-side lcars-chrome-normal">
      <slot name="topbar"/>
      <slot name="sidebar"/>
      <slot name="bottombar"/>
    </div>
    <div class="lcars-content lcars-v-scroll">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lcars-grid-layout',
    props: [],
    data: function() {
      return {
        state: 'default',
        size: 'unknown'
      }
    },
    mounted: function () {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.onResize);
    },
    computed: {
      pageClass: function () {
        var cls = {};
        cls["lcars-page-layout-reduced"] = (this.size.x < 600);
        return cls;
      }
    },
    methods: {
      setState: function(newState) {
        this.state = newState;
      },
      onResize: function() {
        this.size = {x: this.$el.clientWidth, y: this.$el.clientHeight};
        if (['default'].includes(this.state))
        {
          if (this.size.x < 700)
          {
            this.state = 'reduced';
          }
          else if (this.size.y < 500)
          {
            this.state = 'tiled';
          }
        }
        else if (['reduced', 'menu'].includes(this.state))
        {
          if (this.size.x >= 700)
          {
            this.state = 'default';
            if (this.size.y < 400)
            {
              this.state = 'tiled';
            }
          }
        }
        else if (['tiled'].includes(this.state))
        {
          if (this.size.x < 700)
          {
            this.state = 'reduced';
          }
          else if (this.size.y >= 500)
          {
            this.state = 'default';
          }
        }
      }
    },
    watch: {
      $route: function() {
        if (this.state == 'menu')
        {
          this.state = 'reduced';
        }
      }
    }
  }
</script>

<style lang="scss">
  .lcars-page.lcars-page-layout-reduced,
  .lcars-page-layout-reduced .lcars-page
  {
    & > .lcars-grid-content
    {
      grid-column: 1 / 4;

      &:not(table)
      {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
    }
  }
</style>
