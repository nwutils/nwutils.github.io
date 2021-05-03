<template>
  <span
    :class="{ 'enabled': enabled }"
    class="progress-cell"
    @mousemove.stop="log($event)"
  >
    <span
      v-text="title"
      :style="position"
      class="tooltip"
    ></span>
  </span>
</template>

<script>
module.exports = {
  name: 'progress-pill',
  props: {
    enabled: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: undefined
    }
  },
  data: function () {
    return {
      mouseX: 0,
      mouseY: 0,
      width: 0
    };
  },
  methods: {
    log: function (evt) {
      // target the tooltip, not the parent
      let el = evt.target;
      if (el.classList.contains('progress-cell')) {
        el = el.childNodes[0];
      }
      this.width = el.offsetWidth;
      this.mouseX = evt.layerX;
      this.mouseY = evt.layerY;
    }
  },
  computed: {
    position: function () {
      return {
        top: (this.mouseY - 30) + 'px',
        left: Math.floor(this.mouseX - (this.width * 0.5)) + 'px'
      };
    }
  }
};
</script>
