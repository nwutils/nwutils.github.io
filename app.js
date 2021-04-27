window._startCase = require('https://cdn.jsdelivr.net/npm/lodash.startcase@4.4.0/index.js');

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  template: '<app-composition></app-composition>',
  components: {
    'app-composition': httpVueLoader('components/app-composition.vue')
  }
});
