<template>
  <div class="learn-card">
    <div class="learn-card-image-container">
      <a
        :aria-label="project.title + ' link'"
        :href="project.url"
        target="_blank"
        rel="noopener"
      >
        <img
          v-if="project.image"
          :alt="project.title + ' preview image'"
          :src="'_imgs/' + project.image"
          class="learn-card-image"
        />
        <svg-icon v-else :icon="project.icon"></svg-icon>
      </a>
    </div>
    <div class="learn-card-details">
      <div class="learn-card-title">
        <a
          v-text="project.title"
          :href="project.url"
          target="_blank"
          rel="noopener"
        ></a>
      </div>
      <div class="learn-card-author"><strong>{{ project.author }}</strong></div>
      <div class="learn-card-site"><em>{{ project.site }}</em></div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'learn-card',
  components: {
    'svg-icon': httpVueLoader('components/svg-icon.vue')
  },
  props: {
    project: {
      type: Object,
      required: false,
      default: undefined
    }
  }
};
</script>
