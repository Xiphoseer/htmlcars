<template>
  <section>
    <h2>{{ title }} <small v-if="element">&lt;{{ element }}&gt;</small></h2>
    <p><slot name="description"/></p>
    <div class="lcars-container">
      <div class="lcars-container-example">
        <slot name="markup"/>
      </div>
      <pre v-highlightjs="markup"><code class="html lcars-block lcars-h-scroll"></code></pre>
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
  .hljs-name { color: map-get($lcars-colors, or); }
  .hljs-attr { color: map-get($lcars-colors, rb); }
  .hljs-string { color: map-get($lcars-colors, lb); }
</style>
