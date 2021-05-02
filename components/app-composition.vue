<template>
  <div>
    <header>
      <h1>
        <img class="logo" src="/_imgs/meta/fluid.png" alt="NW Utils logo" />
        NW.js Utilities
      </h1>
    </header>
    <div class="container">
      <github-corner
        repo="https://github.com/nwutils/nwutils.github.io"
        background="#474544"
        octocat="#FFF"
      ></github-corner>

      <network-error
        v-if="networkError"
        @dismissed="networkError = false"
      ></network-error>

      <div v-if="loading" class="loading-spinner"></div>

      <p>
        <a
          v-text="'NW.js'"
          href="https://nwjs.io"
          target="_blank"
          rel="noopener"
        ></a>
        is a runtime environment that simplifies the process of creating Cross-Platform Desktop Apps (XPDA's) by using a simple HTML/CSS/JS/Node.js approach.
        <!-- Ya know, like Electron, except it's actually good at it. -->
        This site catalogs resources for the NW.js community.
      </p>

      <p><strong>This site is still under construction</strong></p>

      <template v-for="(category, categoryIndex) in categories">
        <div
          v-if="category.component"
          :key="'category' + categoryIndex"
        >
          <h2 :id="category.title">
            <strong>{{ category.title }}</strong>
          </h2>
          <div class="flex-center">
            <component
              v-for="(project, projectIndex) in category.projects"
              :key="'category' + categoryIndex + 'project' + projectIndex"
              :is="category.component"
              :project="project"
            ></component>
          </div>
        </div>
        <div
          v-else
          :key="'category' + categoryIndex"
        >
          <h2>{{ category.title }}</h2>
          <ul v-if="category.projects && category.projects.length">
            <li
              v-for="(project, projectIndex) in category.projects"
              :key="'category' + categoryIndex + 'project' + projectIndex"
            >
              <template v-if="project.site">
                <strong>{{ project.site }}</strong> -
              </template>
              <a
                :href="project.url"
                target="_blank"
                rel="noopener"
              >
                {{ project.title }}
              </a>
              <template v-if="project.description">
                - {{ project.description }}
              </template>
              <template v-if="project.author">
                - by {{ project.author }}
              </template>
            </li>
          </ul>
        </div>
      </template>
    </div>
    <footer>
      <div class="footer-container">
        {{ (new Date()).getFullYear() }}
      </div>
    </footer>
  </div>
</template>

<script>
module.exports = {
  name: 'app-composition',
  components: {
    'boilerplate-card': httpVueLoader('components/boilerplate-card.vue'),
    'connect-card': httpVueLoader('components/connect-card.vue'),
    'github-corner': httpVueLoader('components/github-corner.vue'),
    'learn-card': httpVueLoader('components/learn-card.vue'),
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
