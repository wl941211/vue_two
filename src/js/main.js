//导入第三方包
import Vue from 'vue';
import Vuerouter from 'vue-router';
import Vueresource from 'vue-resource';

//导入mintui和mui界面插件 
import mintUI from 'mint-ui';//因为默认导入的是Js部分 
import 'mint-ui/lib/style.css';//要额外导入css文件

import 'mui/dist/css/mui.css';//mui是原生写的 不兼容 所以只导入css
//导入Mui的扩展图片图
import 'mui/examples/hello-mui/css/icons-extra.css';

//导入后 要手动use来使用
Vue.use(Vuerouter);
Vue.use(Vueresource);
Vue.use(mintUI);

//导入自己写的组件
import App from '../component/APP.vue';//根组件

//创建一个vue实例
new Vue({
    el:"#app",
    render:c=>c(App)
})