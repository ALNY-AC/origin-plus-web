<template>
  <pre class="ol-pre">
      <slot></slot>
  </pre>
</template>
<script>
export default {
  name: "OlPre"
};
</script>
<style lang="scss" scoped>
.ol-pre {
  padding: 10px;
  background-color: #fff;
  border: solid 1px #ddd;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  font-family: "微软雅黑";
  color: #333;
}
</style>