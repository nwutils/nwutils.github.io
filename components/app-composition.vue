<template>
  <div>
    <header>
      <img class="logo" src="/_imgs/meta/fluid.png" alt="NW Utils logo" />
      <h1>
        NW.js Utilities
      </h1>
    </header>
    <div class="container">
      <nav>
        <strong>Navigation:</strong>
        <span
          v-for="(category, categoryIndex) in categories"
          :key="'nav' + categoryIndex"
        >
          <a
            v-text="category.title"
            :href="'#' + createId(category.title)"
            @click="scrollTo($event)"
          ></a>
          <template v-if="categoryIndex < categories.length - 1">
            |
          </template>
        </span>
      </nav>
      <hr />
      <github-corner
        repo="https://github.com/nwutils/nwutils.github.io"
        background="#FFF"
        octocat="#C43531"
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

      <template v-for="(category, categoryIndex) in categories">
        <div
          v-if="category.component"
          :key="'category' + categoryIndex"
        >
          <h2 :id="createId(category.title)">
            <strong>
              <a
                v-text="category.title"
                :href="'#' + createId(category.title)"
                @click="scrollTo($event)"
              ></a>
            </strong>
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
          <h2 :id="createId(category.title)">
            <strong>
              <a
                v-text="category.title"
                :href="'#' + createId(category.title)"
                @click="scrollTo($event)"
              ></a>
            </strong>
          </h2>
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
          this.scroll();
        })
        .catch((err) => {
          if (err) {
            this.networkError = true;
          }
          this.loading = false;
          this.scroll();
        });
    },
    createId: function (title) {
      let id = title.toLowerCase();
      id = id.split(' ').join('');
      id = id.split('.').join('');
      id = id.split('(').join('');
      id = id.split(')').join('');
      return id;
    },
    scroll: function () {
      setTimeout(function () {
        let smoothScroll = new scrollToSmooth('a[href*="#"]', {
          targetAttribute: 'href',
          durationRelative: 500,
          durationMin: 500,
          durationMax: 5000,
          easing: 'easeOutCubic'
          // offset: null
        });
        smoothScroll.init();

        let hash = window.location.hash;
        if (hash) {
          smoothScroll.scrollTo(hash);
        }
      }, 350);
    },
    scrollTo: function (evt) {
      let hash;
      if (evt && evt.target && evt.target.hash) {
        hash = evt.target.hash;
        history.pushState({}, '', hash);
      }
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
