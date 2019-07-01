<template>
  <span>{{formula}}</span>
</template>

<script lang="js">
export default {
  name: 'lcars-calculator',
  data: function() {
    return { formula: "" }
  },
  methods: {
    input: function (str) {
      this.formula += str;
    },
    clear: function () {
      this.formula = "";
    },
    eval: function() {
      let fr = this.formula;
      var eq = fr;
      eq = eq.replace('\u00F7', '/');
      eq = eq.replace('\u00D7', '*');
      eq = eq.replace('\u2212', '-');

      let res = eval(eq);
      this.$emit('computed', {formula: fr, res});
      this.formula = String(res);
    },
    logback: function (item) {
      this.formula = item.formula;
    }
  }
}
</script>
