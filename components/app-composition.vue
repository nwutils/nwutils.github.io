<template>
  <div>
    <div class="container">
      <network-error
        v-if="networkError"
        @dismissed="networkError = false"
      ></network-error>
      <div v-if="loading" class="loading-spinner"></div>

      <h1>
        <img class="logo" src="/_imgs/meta/fluid.png" alt="NW Utils logo" />
        NW.js Utilities
      </h1>

      <h2>This site is still under construction (obviously)</h2>

      <ul>
        <li
          v-for="(category, categoryIndex) in categories"
          :key="'category' + categoryIndex"
        >
          {{ category.title }}
          <ul v-if="category.projects && category.projects.length">
            <li
              v-for="(project, projectIndex) in category.projects"
              :key="'category' + categoryIndex + 'project' + projectIndex"
            >
              <a :href="project.url" target="_blank">
                {{ project.title }}
              </a>
              <template v-if="project.description">
                - {{ project.description }}
              </template>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'app-composition',
  components: {
    'network-error': httpVueLoader('components/network-error.vue')
  },
  data: function () {
    return {
      loading: true,
      networkError: false,
      categories: []
    };
  },
  methods: {
    getSiteData: function () {
      this.loading = true;
      axios.get('/data/data.json')
        .then((response) => {
          this.categories = response.data;
          this.networkError = false;
          this.loading = false;
        })
        .catch((err) => {
          if (err) {
            this.networkError = true;
          }
          this.loading = false;
        });
    }
  },
  created: function () {
    if (!this.categories.length) {
      this.getSiteData();
    }
  }
};
</script>

<style>
</style>