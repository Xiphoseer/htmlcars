<template>
  <section>
    <h2>{{ title }} <small v-if="element">&lt;{{ element }}&gt;</small></h2>
    <p><slot name="description"/></p>
    <div class="lcars-container">
      <div class="lcars-container-example">
        <slot name="markup"/>
      </div>
      <pre v-highlightjs="markup"><code class="html"></code></pre>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Example',
  props: ['title', 'element'],
  data: function(){
    return {
      markup: ""
    };
  },
  mounted: function() {
    this.markup = this.$slots.markup.map(x => x.elm.outerHTML).join("\n");
  }
}
</script>

<style lang="scss">
  .hljs-name { color: $lcars-color-or; }
  .hljs-attr { color: $lcars-color-rb; }
  .hljs-string { color: $lcars-color-lb; }
</style>
