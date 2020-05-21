<template>
  <div>
    <section class="head">
      <!-- <div class="container"></div> -->
      <div class="title-card">
        <div class="title">
          <span>origin-plus</span>
        </div>
        <div class="sub-title">基于 Node.js 的项目快速搭建工具</div>
      </div>
    </section>
    <ol-start></ol-start>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.head {
  height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  .title-card {
    text-align: center;
    .title {
      font-size: 50px;
      margin-bottom: 20px;
    }
    .sub-title {
      font-size: 16px;
    }
  }
}
</style>