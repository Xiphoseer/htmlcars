<template>
  <span @click="toggle">
    <slot/>
  </span>
</template>

<script>
  export default {
    name: 'lcars-radio',
    props: ['value', 'variant'],
    methods: {
      toggle: function() {
        this.$emit('input', this.variant);
      }
    }
  }
</script>
