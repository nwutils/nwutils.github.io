<template>
  <li>
    <strong>{{ title }}:</strong>
    <span v-if="enabled">✔️</span>
    <span v-else>✖️</span>
  </li>
</template>

<script>
module.exports = {
  name: 'list-boolean',
  props: {
    enabled: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: undefined
    }
  }
};
</script>
