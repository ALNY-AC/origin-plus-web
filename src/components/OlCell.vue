<template>
  <div class="ol-cell">
    <div class="header">{{label}}</div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "OlCell",
  props: {
    label: ""
  }
};
</script>
<style lang="scss" scoped>
.ol-cell {
  display: flex;
  font-size: 16px;

  .header {
    margin-right: 10px;
  }
}
</style>