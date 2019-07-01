<template>
  <div class="lcars-page mb-1">
    <div class="lcars-chrome-horizontal lcars-topbar">
      <h2>{{title}}</h2>
      <span class="lcars-bar-space"></span>
    </div>
    <table class="lcars-color-table lcars-table lcars-fg-ck lcars-font lcars-grid-content">
      <tr v-for="color in colors" :key="color.key" :style="colorStyle(color)">
        <td style="text-align: right;">{{color.key}}</td>
        <td><code style="font-size: 13pt;">--lcars-color-{{color.key.toLowerCase()}}</code></td>
        <td>{{color.code}}</td>
      </tr>
    </table>
    <div class="lcars-chrome-horizontal lcars-bottombar">
      <span class="lcars-bar-space"></span>
      <h2>{{source}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'color-palette',
    props: ['colors', 'title', 'source'],
    methods: {
      colorStyle: function(color) {
        var cls = {};
        let key = "background-color";
        cls[key] = "var(--lcars-color-" + color.key.toLowerCase() + ")";
        cls['color'] = color.font;
        return cls;
      }
    }
  }
</script>

<style lang="scss">
  .lcars-color-table
  {
    font-size: 16pt;
    height: 3rem;
  }
</style>
