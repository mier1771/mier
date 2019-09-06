<template>
    <div class="home-page">
        <div class="masthead banner">
            <img :src="homeBanner.imgUrl">
            <div class="container">
              <h1>{{homeBanner.title}}</h1>
              <h2>{{homeBanner.detail}}</h2>
              <p class="search-wrap">
                  <input name="searchword" id="searchword"  maxlength="200" class="form-control search-query" type="search" size="200" placeholder="请输入关键字" v-model="searchKey" @keyup.enter.native="searchBClick(searchKey)">
                  <button class="button btn btn-primary" @click="searchBClick(searchKey)">搜制度</button>
              </p>
            </div>
        </div>
        <div class=" bg-white pt-8 pb-8">
            <div class="container">
                <div class="col-lg-12">
                    <home-card-left :cardPath="homeCardArr[0].cardPath" :imgUrl="homeCardArr[0].imgUrl" :cardTitle="homeCardArr[0].cardTitle" :cardDetail="homeCardArr[0].cardDetail"></home-card-left>
                </div>
            </div>
        </div>
        <div class="example-bg pt-8 pb-8">
            <div class="container">
                <div class="col-lg-12">
                    <home-card-right :cardPath="homeCardArr[1].cardPath" :imgUrl="homeCardArr[1].imgUrl" :cardTitle="homeCardArr[1].cardTitle" :cardDetail="homeCardArr[1].cardDetail"></home-card-right>
                </div>
            </div>
        </div>
        <div class="bg-white pt-8 pb-8">
            <div class="container">
                <div class="col-lg-12">
                    <home-card-left :cardPath="homeCardArr[2].cardPath" :imgUrl="homeCardArr[2].imgUrl" :cardTitle="homeCardArr[2].cardTitle" :cardDetail="homeCardArr[2].cardDetail"></home-card-left>
                </div>
            </div>
        </div>
        <div class="example-bg  pt-8 pb-8">
            <div class="container">
                <div class="col-lg-12">
                    <home-card-right :cardPath="homeCardArr[3].cardPath" :imgUrl="homeCardArr[3].imgUrl" :cardTitle="homeCardArr[3].cardTitle" :cardDetail="homeCardArr[3].cardDetail"></home-card-right>
                </div>
            </div>
        </div>
        <div class="bg-white p-6 py-md-8 text-center">
            <h2 class="font-weight-normal page-title">
                课思管理制度设计实训平台包含 <span class="text-orange">{{homeVital.types}}</span>类 <span class="text-orange">{{homeVital.strips}}</span>条制度
            </h2>
        </div>
    </div>
</template>

<script>
    import HomeCardLeft from "./base/HomeCardLeft.vue";
    import HomeCardRight from "./base/HomeCardRight.vue";

    export default {
      name: "home-page",
      data(){
        return{
            searchKey:"",
            homeVital:{
              types:"179",
              strips:"102398",
              users:"10003"
            },
            homeBanner:{
                imgUrl:require('../assets/banner.jpg'),
                title:"课思管理制度设计实训平台",
                detail:"简洁、直观、强悍的制度实训系统，让实训更直观、简单。"
            },
            homeCardArr:[
              {
                cardPath:"",
                imgUrl:require("../assets/banner.jpg"),
                cardTitle:"学习制度",
                cardDetail:"学习制度详情学习制度详情学习制度详情学习制度详情学习制度详情学习制度详情"
              },{
                cardPath:"",
                imgUrl:require("../assets/banner.jpg"),
                cardTitle:"应知应会",
                cardDetail:"应知应会详情应知应会详情应知应会详情应知应会详情应知应会详情应知应会详情"
              },{
                cardPath:"",
                imgUrl:require("../assets/banner.jpg"),
                cardTitle:"关键词写制度训练",
                cardDetail:"关键词写制度训练详情关键词写制度训练详情关键词写制度训练详情关键词写制度训练详情关键词写制度训练详情关键词写制度训练详情"
              },{
                cardPath:"",
                imgUrl:require("../assets/banner.jpg"),
                cardTitle:"全文写制度训练",
                cardDetail:"全文写制度训练详情全文写制度训练详情全文写制度训练详情全文写制度训练详情全文写制度训练详情全文写制度训练详情"
              }
            ]

        }
      },
      components:{
          HomeCardLeft,HomeCardRight
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
    .home-page{margin-bottom: -3rem}
</style>
