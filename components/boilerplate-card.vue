<template>
  <div class="card">
    <div>
      <strong>Title:</strong>
      {{ project.title }}
    </div>
    <div>
      <strong>URL:</strong>
      <a
        v-text="project.url"
        :href="project.url"
        target="_blank"
      ></a>
    </div>
    <div>
      <strong>Description:</strong>
      {{ project.description }}
    </div>
    <div>
      <strong>Primary Technologies:</strong>
      {{ project.primaryTechnologies.join(', ') }}
    </div>
    <div>
      <strong>Quality:</strong>
      <ul>
        <li>
          <strong>Automated Desktop Builds:</strong>
          <span v-if="project.quality.builds.automatedDesktop">✔️</span>
          <span v-else>✖️</span>
        </li>
        <li>
          <strong>Automated Builds for the Web:</strong>
          <span v-if="project.quality.builds.automatedWeb">✔️</span>
          <span v-else>✖️</span>
        </li>
        <li>
          <strong>Semantic Versioning:</strong>
          <span v-if="project.quality.semanticVersioning">✔️</span>
          <span v-else>✖️</span>
        </li>
        <li>
          <strong>Release Notes:</strong>
          <span v-if="project.quality.releaseNotes">✔️</span>
          <span v-else>✖️</span>
        </li>
        <li>
          <strong>Linting:</strong>
          <span v-if="project.quality.linting">✔️</span>
          <span v-else>✖️</span>
        </li>
        <li>
          <strong>Unit Testing:</strong>
          <span v-if="project.quality.testing.unit">✔️</span>
          <span v-else>✖️</span>
        </li>
        <li>
          <strong>End-to-End Testing:</strong>
          <span v-if="project.quality.testing.e2e">✔️</span>
          <span v-else>✖️</span>
        </li>
        <li>
          <strong>Documentation:</strong>
          <ul>
            <li>
              <strong>Running Locally:</strong>
              <span v-if="project.quality.documentation.runningLocally">✔️</span>
              <span v-else>✖️</span>
            </li>
            <li>
              <strong>Building Desktop:</strong>
              <span v-if="project.quality.documentation.buildingDesktop">✔️</span>
              <span v-else>✖️</span>
            </li>
            <li>
              <strong>Building Web:</strong>
              <span v-if="project.quality.documentation.buildingWeb">✔️</span>
              <span v-else>✖️</span>
            </li>
            <li>
              <strong>Screenshot:</strong>
              <span v-if="project.quality.documentation.screenshot">✔️</span>
              <span v-else>✖️</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
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
  },
  methods: {
    startCase: function (str) {
      if (['url', 'e2e'].includes(str.toLowerCase())) {
        return str.toUpperCase();
      }
      return window._startCase(str);
    }
  }
};
</script>
