<template>
  <div class="alert" role="alert">
    <span>
      There was an error on the server during a request for data.
      <strong>Please reload the page.</strong>
    </span>
    <button
      type="button"
      class="alert-close"
      data-dismiss="alert"
      aria-label="Close"
      @click="$emit('dismissed')"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
module.exports = {
  name: 'network-error'
};
</script>
