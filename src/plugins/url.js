import Vue from 'vue';

let Url = {
  serverUrl: 'http://127.0.0.1',//接口
  uploadUrl: '',//上传接口
  imageUrl: '',//图片域名
}

Vue.prototype.$Url = Url;

export default Url;


