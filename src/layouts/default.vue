<template>
  <div class="default">
    <nuxt class="view-body" />
    <van-tabbar route v-model="active" :fixed="false">
      <van-tabbar-item replace to="/" icon="homw-o">选项</van-tabbar-item>
      <van-tabbar-item replace to="/" icon="homw-o">选项</van-tabbar-item>
      <van-tabbar-item replace to="/" icon="home-o">选项</van-tabbar-item>
      <van-tabbar-item replace to="/" icon="home-o">选项</van-tabbar-item>
    </van-tabbar>
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
