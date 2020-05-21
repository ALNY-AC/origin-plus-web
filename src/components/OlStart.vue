<template>
  <section class="ol-start">
    <div class="container">
      <h2>创建项目</h2>
      <ol-pre>{{cmd.createApp}}</ol-pre>
      <ol-cell label="appName">项目名</ol-cell>
      <ul>
        <li>
          <label for>appName</label>
          <span>项目名</span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "OlStart",
  data() {
    return {
      cmd: {
        createApp: `$ op create app <appName> [temp]`
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.ol-start {
  padding: 80px 10px;
}
</style>