// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import store from './store/store'
import axios from 'axios';

import TablerVue from '../static/dist/vue-tabler'


Vue.use(ElementUI)

Vue.prototype.$axios = axios;
axios.defaults.baseURL = '#';
axios.defaults.headers.post['Content-Type'] = 'application/json';


Vue.config.productionTip = false
Vue.use(TablerVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (sessionStorage.getItem('userName')) {// 判断是否登录
      next()
    } else {// 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
});
// http请求拦截器
var loadinginstace;
axios.interceptors.request.use(function (config){
  if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = `Bearer ${store.state.token}`;
    // config.headers.Authorization = token +Bearer;
  }
  return config;
  // 给视频添加评论提交之前对评论进行判断
},function (error) {
  return Promise.reject(error);
});
//http 响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 这里写清除token的代码
          sessionStorage.setItem("userToken",null);
          sessionStorage.setItem("userName",null);
          sessionStorage.setItem("userImage",null);
          console.log(router.currentRoute.fullPath)
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response)
  });
router.afterEach(route => {
	window.scroll(0,0);
})