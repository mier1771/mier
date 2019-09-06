<template>
  <div id="app">
      <body class="">
          <div class="page">
              <div class="flex-fill">
                <!-- 头部 -->
                <head-component v-if = "isRouterAlive"></head-component>
                <!-- 内容 -->
                <keep-alive>
                    <router-view v-if = "isRouterAlive"></router-view>
                </keep-alive>
              </div>
              <!-- 尾部 -->
              <footer-component></footer-component>
          </div>
      </body>
  </div>
</template>

<script>
    
    import footerComponent from './components/base/Footer'
    import headComponent from './components/base/Head'

    export default {
      name: 'App',
      provide(){
        return{
          reload:this.reload
        }
      },
      data: () => ({
          menuCollapsed: true,
          isRouterAlive:true
      }),
      components:{
          footerComponent,headComponent
      },
      methods: {
        toggleMenu() {
          this.menuCollapsed = !this.menuCollapsed
        },
        reload(){
          this.isRouterAlive = false;
          this.$nextTick(function(){
              this.isRouterAlive = true
          })
        }
      }
    }
</script>

<style>
    @import "../static/dist/css/dashboard.css";
    /**./assets/logo.png**/
</style>
