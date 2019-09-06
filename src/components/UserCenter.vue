<template>
    <div class="usercenter mt-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card card-profile">
                        <div class="card-header" style="background-image: url(../assets/person.jpg);"></div>
                        <div class="card-body text-center">
                          <img class="card-profile-img" src="../assets/person.jpg">
                          <h3 class="mb-3">米儿</h3>
                          <p class="mb-4">
                              你在2019.7.30这一天来到这里
                          </p> 
                          <p class="mb-4">
                              浏览过100篇制度，进行了1次训练，棒棒的
                          </p>
                        </div>
                    </div>
                    <div class="card pers-tab">
                        <ul>
                            <li class="active"><router-link :to="{path:'/userCenter/report'}">实训概况</router-link></li>
                            <li class=""><router-link :to="{path:'/userCenter/history'}">实训记录</router-link></li>
                            <li class=""><router-link :to="{path:'/userCenter/collect'}">我的收藏</router-link></li>
                            <li class=""><router-link :to="{path:'/userCenter/setinfo'}">资料设置</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="child">
                        <router-view></router-view>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
    import BreadCrumb from "./base/BreadCrumb.vue";

    export default {
      name: "usercenter",
      data(){
        return{

        }
      },
      components:{
          BreadCrumb
      },
      methods:{
          searchBClick:function(key){
              // 输入的搜索内容this.searchKey
              this.$router.push({path:"/listSystems",query:{words:key}});
              this.searchKey = "";
              console.log(this.searchKey);
          }
      }
    }
</script>

<style scoped>

</style>
