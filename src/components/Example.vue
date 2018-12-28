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
import base from 'js-beautify';

export default {
  name: 'Example',
  props: ['title', 'element'],
  data: function(){
    return {
      markup: ""
    };
  },
  mounted: function() {
    let ht = this.$slots.markup.map(x => x.elm.outerHTML).join("\n");
    let ba = base.html(ht, {'wrap-line-length': 100, 'inline': ['small']});
    this.markup = ba;
  }
}
</script>

<style lang="scss">
  .hljs-name { color: $lcars-color-or; }
  .hljs-attr { color: $lcars-color-rb; }
  .hljs-string { color: $lcars-color-lb; }
</style>
