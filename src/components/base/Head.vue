<template>
    <div class="header py-4">
        <div class="container">
            <div class="d-flex">
                <router-link :to="{path:'/'}"><img :src="logoUrl" class="header-brand-img" alt="制度实训平台"></router-link>
                <div class="menu-header collapse d-lg-flex p-0" id="headerMenuCollapse">
                    <div class="align-items-center">
                      <div class="col-lg order-lg-first">
                        <ul class="nav nav-tabs border-0 flex-column flex-lg-row px-lg-7">
                            <li v-for="(item, index) in navArr" class="nav-item" @click="routerLink(index)" :key="index">
                                <router-link :to="item.url" class="nav-link" :class="navIndex === index?'active':'' ">{{ item.title }}</router-link>
                            </li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div class="d-flex order-lg-2 ml-auto">
                    <div class="" v-show="!isLogin">
                        <!-- <a @click="clickLink()" class="nav-link icon">登录</a> -->
                        <router-link :to="{path:'/login'}" class="nav-link icon">登录</router-link>
                    </div>
                    <div class="" v-show="!isLogin">
                        <router-link :to="{path:'/register'}" class="nav-link icon">注册</router-link>
                    </div>
                    <div class="dropdown"  v-show="isLogin">
                        <a href="#" class="nav-link pr-0 leading-none" @click="menuShow = !menuShow">
                            <img class="avatar" src="../../assets/person.jpg">
                            <!-- <span class="ml-2 d-none d-lg-block">
                                <span class="text-default">米儿</span>
                            </span> -->
                        </a>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow" v-if="menuShow">
                            <router-link :to="{path:'/userCenter/report'}" class="dropdown-item">
                                <i class="dropdown-icon fe fe-user"></i> 实训概况
                            </router-link>
                            <router-link :to="{path:'/userCenter/history'}" class="dropdown-item">
                                <i class="dropdown-icon fe fe-user"></i> 实训记录
                            </router-link>
                            <router-link :to="{path:'/userCenter/collect'}" class="dropdown-item">
                                <i class="dropdown-icon fe fe-user"></i> 我的收藏
                            </router-link>
                            <router-link :to="{path:'/userCenter/setinfo'}" class="dropdown-item">
                                <i class="dropdown-icon fe fe-user"></i> 资料设置
                            </router-link>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" @click="logout()">
                                <i class="dropdown-icon fe fe-log-out"></i> 登出
                            </a>
                        </div>
                    </div>
                </div>
                <a href="#" class="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse" data-target="#headerMenuCollapse">
                    <span class="header-toggler-icon"></span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'header',
    inject:['reload'],
    data () {
      return {
          logoUrl:require("../../assets/logo.png"),
          navArr:[
                {
                    title:"首页",
                    url:"/"
                },
                {
                    title:"应知应会",
                    url:"/masterSystems"
                },
                {
                    title:"制度库",
                    url:"/listSystems"
                }
          ],
          navIndex:0,
          menuShow:false
      }
    },
    computed:{
        isLogin(){
            if (sessionStorage.getItem("userName")){
                this.$store.commit("userStatus",sessionStorage.getItem("userName"));
            } else {
                this.$store.commit("userStatus",null);
            }
            //通过sessionstorage获取vuex里islogin的状态
            // alert(this.$store.getters.isLogin)
            return this.$store.getters.isLogin;
        },
    },
    watch:{
        "$route"(){
            let path = this.$route.path;
            // 检索当前路径
            // this.checkRouterLocal(path)
        }
    },
    methods:{
        routerLink(index){
            // 点击哪个路由就赋值给自定义的下标
            this.navIndex = index;
        },
        // 退出
        logout() {
            sessionStorage.removeItem('userName');
            sessionStorage.removeItem('flag');
            // this.reload();
            this.$router.push({
                path:'/login'
            })
            this.reload();

        }
        
    }
  }
</script>

<style scoped>


</style>
