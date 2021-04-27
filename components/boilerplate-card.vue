<template>
  <div class="card">
    {{ project }}
  </div>
</template>

<script>
module.exports = {
  name: 'boilerplate-card',
  props: {
    project: {
      type: Object,
      required: false,
      default: undefined
    }
  }
};
</script>
