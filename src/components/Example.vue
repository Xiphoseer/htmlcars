<template>
  <section>
    <h2>{{ title }} <small v-if="element">&lt;{{ element }}&gt;</small></h2>
    <p><slot name="description"/></p>
    <div class="lcars-container">
      <div class="lcars-container-example">
        <slot name="markup"/>
      </div>
      <pre class="lcars-h-scroll pb-1 pr-1" v-highlightjs="markup"><code class="html lcars-block"></code></pre>
    </div>
  </section>
</template>

<script>
import base from 'js-beautify';

function map(x) {
  if (x.componentOptions) {
    return "<" + x.componentOptions.tag + "></" + x.componentOptions.tag + ">";
  } else {
    return x.elm.outerHTML;
  }
}

export default {
  name: 'Example',
  props: ['title', 'element'],
  data: function(){
    return {
      markup: ""
    };
  },
  mounted: function() {
    let ht = this.$slots.markup.map(x => map(x)).join("\n");
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
