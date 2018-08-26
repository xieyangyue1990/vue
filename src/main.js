// main.js  项目js入口文件

import Vue from "vue";

//导入MUI样式
import "./lib/mui/css/mui.css";
import "mint-ui/lib/style.css";

//-----MintUI按需导入-------
import { Header } from "mint-ui";
Vue.component(Header.name, Header);

//导入 app 组件
import app from "./App.vue";

var vm = new Vue({
  el: "#app",
  render: c => c(app)
});
