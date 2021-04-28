<template>
  <span
    :class="{ 'enabled': enabled }"
    :title="title"
    class="progress-cell"
  ></span>
</template>

<script>
module.exports = {
  name: 'progress-pill',
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
