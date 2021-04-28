<template>
  <div class="card">
    <h3 class="card-title">
      <a
        v-text="project.title"
        :href="project.url"
        target="_blank"
      ></a>
    </h3>
    <div>
      {{ project.description }}
    </div>
    <div class="pill-container">
      <span
        v-for="(technology, technologyIndex) in project.primaryTechnologies"
        :key="'technology' + technologyIndex"
        :style="'--hue: ' + Math.floor(Math.random() * 360)"
        class="pill"
      >
        <svg-icon
          :icon="technology"
          :monochrome="true"
        ></svg-icon>
        {{ technology }}
      </span>
    </div>

    <div
      v-if="!qualityShown"
      class="progress-bar"
      title="Click to toggle quality summary"
      @click="qualityShown = !qualityShown"
    >
      <strong>Quality:</strong>&nbsp;
      <progress-pill
        v-for="(pill, pillIndex) in progressPills"
        :key="'pill' + pillIndex"
        :title="pill.title"
        :enabled="pill.enabled"
      ></progress-pill>
    </div>
    <div
      v-else
      @click="qualityShown = !qualityShown"
    >
      <strong>Quality:</strong>
      <ul>
        <list-boolean
          v-for="(pill, pillIndex) in qualityNormal"
          :key="'normalPill' + pillIndex"
          :title="pill.title"
          :enabled="pill.enabled"
        ></list-boolean>
        <li>
          <strong>Documentation:</strong>
          <ul>
            <list-boolean
              v-for="(pill, pillIndex) in qualityDocumentation"
              :key="'documentationPill' + pillIndex"
              :title="pill.title"
              :enabled="pill.enabled"
            ></list-boolean>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'boilerplate-card',
  components: {
    'list-boolean': httpVueLoader('components/list-boolean.vue'),
    'progress-pill': httpVueLoader('components/progress-pill.vue'),
    'svg-icon': httpVueLoader('components/svg-icon.vue')
  },
  props: {
    project: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  data: function () {
    return {
      qualityShown: false
    };
  },
  computed: {
    qualityNormal: function () {
      return [
        {
          title: 'Automated Desktop Builds',
          enabled: this.project.quality.builds.automatedDesktop
        },
        {
          title: 'Automated Builds for the Web',
          enabled: this.project.quality.builds.automatedWeb
        },
        {
          title: 'Semantic Versioning',
          enabled: this.project.quality.semanticVersioning
        },
        {
          title: 'Release Notes',
          enabled: this.project.quality.releaseNotes
        },
        {
          title: 'Linting',
          enabled: this.project.quality.linting
        },
        {
          title: 'Unit Testing',
          enabled: this.project.quality.testing.unit
        },
        {
          title: 'End-to-End Testing',
          enabled: this.project.quality.testing.e2e
        }
      ];
    },
    qualityDocumentation: function () {
      return [
        {
          title: 'Running Locally',
          enabled: this.project.quality.documentation.runningLocally
        },
        {
          title: 'Building Desktop',
          enabled: this.project.quality.documentation.buildingDesktop
        },
        {
          title: 'Building Web',
          enabled: this.project.quality.documentation.buildingWeb
        },
        {
          title: 'Screenshot',
          enabled: this.project.quality.documentation.screenshot
        }
      ];
    },
    progressPills: function () {
      return [
        ...this.qualityNormal,
        ...this.qualityDocumentation.map(function (pill) {
          return {
            ...pill,
            title: 'Documentation: ' + pill.title
          };
        })
      ];
    }
  }
};
</script>
