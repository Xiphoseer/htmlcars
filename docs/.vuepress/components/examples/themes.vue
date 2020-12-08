<template>
  <div>
    <div class="theme" v-for="theme in themes" v-bind:key="theme.name">
      <h2>{{theme.name}}</h2>
      <table>
        <tr v-for="color in theme.colors" v-bind:key="color.name">
          <td>{{color.name}}</td>
          <td v-for="hue in color.hues" :class="hueClass(hue)" v-bind:key="hue.name">
            {{hue.name}}<!-- ({{hue.key}})-->
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="js">
  import ComponentLibrary from './../../../../src/index.js'

  export default {
    data() {
      return {
        themes: ComponentLibrary.themes,
      }
    },
    methods: {
      hueClass: function (hue) {
        return ["lcars-bg-" + hue.key, "lcars-fg-ck"];
      }
    }
  }
</script>

<style scoped lang="scss">
  td {
    width: 18%;
  }

  td:first-child {
    width: 12%;
  }
</style>
