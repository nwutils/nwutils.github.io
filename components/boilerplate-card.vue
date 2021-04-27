<template>
  <div class="card">
    <div
      v-for="(value, key) in project"
      :key="'key' + key"
    >
      <strong>{{ startCase(key) }}:</strong>
      <span v-if="Array.isArray(value)">{{ value.join(', ') }}</span>
      <ul v-else-if="typeof(value) === 'object'">
        <li
          v-for="(subValue, subKey) in value"
          :key="'key' + key + 'subKey' + subKey"
        >
          <strong>{{ startCase(subKey) }}:</strong>
          <ul v-if="typeof(subValue) === 'object'">
            <li
              v-for="(subSubValue, subSubKey) in subValue"
              :key="'key' + key + 'subKey' + subKey + 'subSubKey' + subSubKey"
            >
              <strong>{{ startCase(subSubKey) }}:</strong>
              <span v-if="subSubValue === true">✔️</span>
              <span v-else-if="subSubValue === false">✖️</span>
              <span v-else>{{ subSubValue }}</span>
            </li>
          </ul>
          <span v-else-if="subValue === true">✔️</span>
          <span v-else-if="subValue === false">✖️</span>
          <span v-else>{{ subValue }}</span>
        </li>
      </ul>
      <a
        v-text="value"
        v-else-if="key === 'url'"
        :href="value"
      ></a>
      <span v-else>{{ value }}</span>
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
