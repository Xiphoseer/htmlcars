<template>
  <div>
    <example title="Horizontal Rule" element="hr">
      <template slot="description">
        A horizontal rule is a divider which may be used to split up a text.
        It is white by default, but may be assigned different colors.
      </template>
      <template slot="markup">
        <hr>
        <hr v-for="key in colors" :key="key" :class="'lcars-color-' + key">
      </template>
    </example>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      colors: ['or', 'fl', 'bg', 'rb', 'be', 'lb', 'ap', 'pi', 'ho', 'ck']
    }
  }
}
</script>