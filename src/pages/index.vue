<template>
  <div>
    <section class="head">
      <!-- <div class="container"></div> -->
      <div class="title-card">
        <div class="title">
          <span>origin-plus</span>
        </div>
        <div class="sub-title">基于 Node.js 的轻量级项目快速搭建&开发工具</div>
      </div>
    </section>
    <!-- <ol-start></ol-start> -->

    <section>
      <div class="container" style="padding:30px 0">
        <h2>创建项目</h2>
        <ol-pre>$ op <项目名> -app</ol-pre>
        <p>创建一个项目，将会创建nuxt预制模板的项目</p>
        <p>因为每个开发者的网络环境与依赖环境不一样，所以创建后并不会自动安装依赖，请手动安装以达到最高体验。</p>
      </div>
    </section>

    <section>
      <div class="container" style="padding:30px 0">
        <h2>根据项目模板创建项目</h2>
        <ol-pre>$ op <项目名> [模板名] -app</ol-pre>
        <p>根据一个模板创建项目，模板名可以为内置的模板或http地址，http地址需指向一个zip文件地址或git库</p>
      </div>
    </section>

    <section>
      <div class="container" style="padding:30px 0">
        <h2>将指定内容打包成预制模板</h2>
        <ol-pre>$ op <模板名> -app -pack</ol-pre>
        <p>将当前目录添加到模板库，提供<模板名>后，在创建项目的时候即可引用这个模板，程序会过自动滤掉node_modules、.git等文件</p>
      </div>
    </section>

    <section>
      <div class="container" style="padding:30px 0">
        <h2>生成vue文件</h2>
        <ol-pre>$ op <组件名></ol-pre>
        <p>组件名：最终生成vue文件的名字</p>
        <p>生成的代码中预制了基本的vue代码和文件结构</p>
        <ol-pre>$ op card //创建一个名为card的组件</ol-pre>
      </div>
    </section>

    <section>
      <div class="container" style="padding:30px 0">
        <h2>根据模板生成文件</h2>
        <ol-pre>$ op <组件名> [模板名]</ol-pre>
        <p>模板名：提供一个模板名，如果模板存在则通过模板创建，如果模板不存在则提示不存在，提供一个http地址则从网上下载文件</p>
        <p>注：使用的模板如果为本地自定义模板或未按照程序约定开发的模板，将仅会执行拷贝。</p>
        <ol-pre>$ op OrderCard card //根据模板card创建一个名为OrderCard的组件</ol-pre>
        <ol-pre>$ op card http://www.comp.com/card.vue //根据地址内容创建一个card组件</ol-pre>
      </div>
    </section>

    <section>
      <div class="container" style="padding:30px 0">
        <h2>将js、vue、scss代码单独存放在.js、.vue、.scss代码内</h2>
        <ol-pre>$ op <组件名> -f</ol-pre>
        <p>-f：标记是否单独存放js、vue、scss代码</p>
        <ol-pre>$ op card -f //会单独生成card/index.js、card/index.scss、card/index.vue</ol-pre>
      </div>
    </section>

    <section>
      <div class="container" style="padding:30px 0">
        <h2>将指定内容打包为组件模板</h2>
        <ol-pre>$ op <模板名> -comp -pack</ol-pre>
        <p>将当前目录添加到模板库，提供<模板名>后，在创建组件的时候即可引用这个模板，程序会过自动滤掉node_modules、.git等文件</p>
      </div>
    </section>

  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.head {
  min-height: auto;
  height: 60vh;
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
p {
  font-weight: lighter;
  line-height: 2;
}
</style>