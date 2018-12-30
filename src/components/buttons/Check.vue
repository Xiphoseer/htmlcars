<template>
  <span @click="toggle">
    <slot/>
  </span>
</template>

<script>
  export default {
    name: 'lcars-check',
    props: {
      value: Boolean
    },
    methods: {
      toggle: function() {
        this.$emit('input', !this.value);
      }
    }
  }
</script>
