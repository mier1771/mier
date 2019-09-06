import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import MasterSystems from '@/components/MasterSystems'
import SystemCon from '@/components/SystemCon'
import ListSystems from '@/components/ListSystems'
import KeyWrite from '@/components/KeyWrite'
import KeyConsult from '@/components/KeyConsult'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ForgetPass from '@/components/ForgetPass'
import ForgetNew from '@/components/ForgetNew'
import UserCenter from '@/components/UserCenter'
import UserSetinfo from '@/components/UserSetinfo'
import UserTHistory from '@/components/UserTHistory'
import UserCollect from '@/components/UserCollect'
import UserReport from '@/components/UserReport'
import DirectWrite from '@/components/DirectWrite'
import DirectConsult from '@/components/DirectConsult'
import AboutUs from '@/components/AboutUs'

import Empty from '@/components/Empty'



Vue.use(Router);
// Vue.use(Vuex);


export default new Router({
  routes: [
    {
      path:'/login',
      name:'login',
      component:Login,
      meta:{
          isLogin:false
      }
    },
    {
      path:'/register',
      name:'register',
      component:Register,
      meta:{
          isLogin:false
      }
    },
    {
      path:'/forgetPass',
      name:'forgetPass',
      component:ForgetPass,
      meta:{
          isLogin:false
      }
    },
    {
      path:'/forgetNew',
      name:'forgetNew',
      component:ForgetNew,
      meta:{
          isLogin:false
      }
    },
    {
      path: '/',
      name: '首页',
      component: HomePage,
      meta:{
          isLogin:false
      }
    },
    {
    	path: '/empty',
    	name: 'empty',
    	component: Empty,
      meta:{
          isLogin:false
      }
    },{
      path: '/masterSystems',
      name: 'masterSystems',
      component: MasterSystems,
      meta:{
          isLogin:false
      }
    },{
      path:'/systemCon',
      name:'systemCon',
      component:SystemCon,
      meta:{
          isLogin:true
      }
    },
    {
      path:'/listSystems',
      name:'listSystems',
      component:ListSystems,
      meta:{
          isLogin:false
      }
    },
    {
      path:'/keyWrite',
      name:'keyWrite',
      component:KeyWrite,
      meta:{
          isLogin:true
      }
    },
    {
      path:'/directWrite',
      name:'directWrite',
      component:DirectWrite,
      meta:{
          isLogin:true
      }
    },
    {
      path:'/keyConsult',
      name:'keyConsult',
      component:KeyConsult,
      meta:{
          isLogin:true
      }
    },
    {
      path:'/directConsult',
      name:'directConsult',
      component:DirectConsult,
      meta:{
          isLogin:true
      }
    },
    {
      path:'/aboutUs',
      name:'aboutUs',
      component:AboutUs,
      meta:{
          isLogin:false
      }
    },
    {
      path:'/userCenter',
      name:'userCenter',
      component:UserCenter,
      meta:{
          isLogin:true
      },
      children:[
        {
          path:'/userCenter/setinfo',
          component:UserSetinfo
        },
        {
          path:'/userCenter/history',
          component:UserTHistory
        },
        {
          path:'/userCenter/collect',
          component:UserCollect
        },
        {
          path:'/userCenter/report',
          component:UserReport
        }
      ]
    },
    // {
    //   path:'/userCenter/setinfo',
    //   name:'setinfo',
    //   component:UserSetinfo,
    //   meta:{
    //       isLogin:true
    //   }
    // }
  ]
})

// routes: [
//     {
//       path: '/',
//       name: '首页',
//       component: HomePage,
//       meta:{title:'首页'}
//     },
//     {
//       path: '/empty',
//       name: 'empty',
//       component: Empty
//     },{
//       path: '/',
//       name: '应知应会',
//       redirect:'/masterSystems',
      
//     },{
//       path: '/masterSystems',
//       name: '应知应会',
//       component: MasterSystems,
//       meta:{ requiresAuth:true },
//       children:[
//         {
//           path:'/',
//           redirect:'./systemCon',
//         },
//         {
//           path:'masterSystems/systemCon',
//           name:'制度详情',
//           component:SystemCon,
//           meta:{title:'制度详情'}
//         }
//       ]
//     },
//     {
//       path: '/',
//       name: '制度库',
//       redirect:'/listSystems',
      
//     },
//     {
//       path: '/listSystems',
//       name: '制度库',
//       component: ListSystems,
//       meta:{ requiresAuth:true },
//       children:[
//         {
//           path:'/',
//           redirect:'./systemCon',
//         },
//         {
//           path:'listSystems/systemCon',
//           name:'制度详情',
//           component:SystemCon,
//           meta:{title:'制度详情'}
//         }
//       ]
//     },
    
//     {
//       path:'/keyWrite',
//       name:'关键词写制度',
//       component:KeyWrite
//     }
//   ]
