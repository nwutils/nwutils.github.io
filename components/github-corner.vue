<template>
  <a
    :href="repo"
    :style="colors"
    class="github-corner"
    title="Edit this page on GitHub"
  >
    <svg viewBox="0 0 250 250">
      <path d="M0 0l115 115h15l12 27 108 108v-250z" />
      <path class="octo-arm" d="M128.3 109c-14.5-9.3-9.3-19.4-9.3-19.4 3-6.9 1.5-11 1.5-11-1.3-6.6 2.9-2.3 2.9-2.3 3.9 4.6 2.1 11 2.1 11-2.6 10.3 5.1 14.6 8.9 15.9" />
      <path class="octo-body" d="M115 115c-.1.1 3.7 1.5 4.8.4l13.9-13.8c3.2-2.4 6.2-3.2 8.5-3-8.4-10.6-14.7-24.2 1.6-40.6 4.7-4.6 10.2-6.8 15.9-7 .6-1.6 3.5-7.4 11.7-10.9 0 0 4.7 2.4 7.4 16.1 4.3 2.4 8.4 5.6 12.1 9.2 3.6 3.6 6.8 7.8 9.2 12.2 13.7 2.6 16.2 7.3 16.2 7.3-3.6 8.2-9.4 11.1-10.9 11.7-.3 5.8-2.4 11.2-7.1 15.9-16.4 16.4-30 10-40.6 1.6.2 2.8-1 6.8-5 10.8l-11.7 11.6c-1.2 1.2.6 5.4.8 5.3z" />
    </svg>
  </a>
</template>

<script>
module.exports = {
  name: 'github-corner',
  props: {
    repo: {
      type: String,
      required: true
    },
    background: {
      type: String,
      default: '#000'
    },
    octocat: {
      type: String,
      default: '#FFF'
    }
  },
  computed: {
    colors: function () {
      return [
        '--github-corner-bg:' + this.background,
        '--github-corner-octocat:' + this.octocat
      ].join(';');
    }
  }
};
</script>

<style>
.github-corner svg {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 80px;
  height: 80px;
  border: 0px;
  fill: var(--github-corner-bg);
  /* filter: drop-shadow(-7px 7px 0px var(--github-corner-octocat)); */
}
.github-corner .octo-body {
  fill: var(--github-corner-octocat);
}
.github-corner .octo-arm {
  fill: var(--github-corner-octocat);
  transform-origin: 130px 106px;
}
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
  0%, 100% {
    transform: rotate(0deg);
  }
  20%, 60% {
    transform: rotate(-25deg);
  }
  40%, 80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
  .github-corner:hover .octo-arm {
    animation: none;
  }
}
@media (max-width: 320px) {
  .github-corner svg {
    display: none;
  }
  .github-corner p {
    display: block;
  }
}
</style>
