<template>
  <div class="default">
    <nuxt class="view-body" />
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "root",
  data() {
    return {
      active: 0
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {
    $route(to) {},
    active(v) {}
  }
};
</script>
<style lang="scss" scoped>
@import "default.scss";
</style>
