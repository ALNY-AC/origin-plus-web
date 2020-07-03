<template>
  <section class="ol-start">
    <div class="container">
      <h2>创建项目</h2>
      <ol-pre>{{cmd.createApp}}</ol-pre>

      <table>
        <tr>
          <td>appName</td>
          <td>项目名</td>
        </tr>
        <tr>
          <td>temp</td>
          <td>模板</td>
        </tr>
      </table>

      <ol-cell label="appName">项目名</ol-cell>
      <ol-cell label="temp">模板</ol-cell>
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