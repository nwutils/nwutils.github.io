<template>
  <div class="connect-card">
    <a
      :href="project.url"
      target="_blank"
      @click="open"
    >
      <svg-icon :icon="project.icon"></svg-icon>
    </a>
    <div>{{ project.title }}</div>
  </div>
</template>

<script>
module.exports = {
  name: 'connect-card',
  components: {
    'svg-icon': httpVueLoader('components/svg-icon.vue')
  },
  props: {
    project: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  methods: {
    open: function () {
      window.open(this.project.url);
    }
  }
};
</script>
