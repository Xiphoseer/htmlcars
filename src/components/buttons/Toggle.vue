<template>
  <span class="lcars-toggle lcars-chrome-component" :class="activeClass" />
</template>

<script>
  export default {
    name: 'lcars-toggle',
    props: {
      active: Boolean
    },
    data: function () {
      return {};
    },
    computed: {
      activeClass: function () {
        return {hidden: !this.active};
      }
    }
  }
</script>
