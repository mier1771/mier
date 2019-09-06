<template>
    <div class="container key_write">
        <div class="row">
            <div class="col-12"> 
                <bread-crumb :breadList="breadList"></bread-crumb>
            </div> 
        </div>
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                      训练结果
                    </h3>
                </div>
                <!-- 关键词 -->
                <div class="card-body" id="">
                    <p class="text-default">您的答案：</p>
                    <div class="tags">
                        <span class="tag" v-for="item in sysKeys" :class="{'tag-orange':item.tag == 1}">{{item.key}}</span>
                    </div>
                </div>
            </div>
            <div class="card analysis">
                <div class="card-header">
                    <h3 class="card-title">
                      训练分析
                    </h3>
                </div>
                <!-- 关键词 -->
                <div class="card-body consult" id="">
                    <div class="text-center exam-result-score">
                        <span>感谢您的作答,您的得分为：</span>
                        <span class="star-big">
                            <img src="../assets/star1.png" alt="">
                        </span>
                        <span class="score">{{keyConsult.grade}}</span>
                        <span>分</span>
                        <span class="star-small">
                            <img src="../assets/star2.png" alt="">
                        </span>
                    </div>
                    <div class="row">
                      <div class="col-sm-3 col-6 text-center">
                            <p class="ranking-p">{{keyConsult.number}}</p>
                            <p><img src="../assets/zan.png" class="mr-2"><span>训练人数</span></p>
                        </div>
                        <div class="col-sm-3 col-6 text-center">
                            <p class="beat">{{keyConsult.average}}</p>
                            <p><img src="../assets/paihang.png" class="mr-2"><span>全员平均分</span></p>
                        </div>
                        <div class="col-sm-3 col-6 text-center">
                            <p class="ranking-p">{{keyConsult.acc}}</p>
                            <p><img src="../assets/zan.png" class="mr-2"><span>正确率</span></p>
                        </div>
                        <div class="col-sm-3 col-6 text-center">
                            <p class="beat">{{keyConsult.beat}}</p>
                            <p><img src="../assets/paihang.png" class="mr-2"><span>击败率</span></p>
                        </div>
                    </div>
                    <div class="rank-wrap">
                        <p class="rank-title">
                            <span class="underline"></span>
                            <span>排行榜</span>
                            <span class="underline"></span>
                        </p>
                        <p class="rank-label">
                            <span>名次</span>
                            <span>用户名</span>
                            <span>账号</span>
                            <span>分数</span>
                        </p>
                        <div class="ranking">
                            <ul>
                                <li class="rank-list active user_rank">
                                    <span class="user-rank-icon">
                                        <span>25</span>
                                    </span>
                                    <span class="user-name">mier</span>
                                    <span class="user-account">Un***56</span>
                                    <span class="user-score">70.0</span>
                                </li>
                                <li v-for="item in rangingList" class="rank-list">
                                    <span class="user-rank-icon" v-if="item.ranking == 1">
                                        <img src="../assets/rank1.png">
                                    </span>
                                    <span class="user-rank-icon" v-else-if="item.ranking == 2">
                                        <img src="../assets/rank2.png">
                                    </span>
                                    <span class="user-rank-icon" v-else-if="item.ranking == 3">
                                        <img src="../assets/rank3.png">
                                    </span>
                                    <span class="user-rank-icon user-rank-three-after"  v-else>
                                        <span>{{item.ranking}}</span>
                                    </span>
                                    <span class="user-name">{{item.user}}</span>
                                    <span class="user-account">{{item.account}}</span>
                                    <span class="user-score">{{item.grade}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BreadCrumb from "./base/BreadCrumb.vue";
    import SystemNav from "./base/SystemNav.vue";

    export default {
        name: "key_write",
        created(){
            // 获取训练结果
            this.getTrainRes();
            // 获取训练分析
            this.getTrainAnalysis();
        },
        data(){
          return{
              breadList:[
                  {
                    path:'/listSystems',
                    name:'制度库',
                  },
                  {
                    path:'/systemCon',
                    name:'制度详情',
                  },
                  {
                    path:'/keyWrite',
                    name:'关键词写制度',
                  }
              ],
              // 从后台获取数据
              // sysKeys:[],
              sysKeys:[
                {
                  key:'公司',
                  tag:'1'
                },{
                  key:'人力资源',
                  tag:'1'
                },{
                  key:'部门',
                  tag:'0'
                },{
                  key:'人员',
                  tag:'0'
                },{
                  key:'职位',
                  tag:'1'
                }
              ],
              // 训练成绩
              keyConsult:{
                grade:'70.0',
                number:'100',
                average:'80',
                acc:'66%',
                beat:'76.9%'
              },
              // 此制度训练的排行榜显示前十名排行成绩
              rangingList:[
                  {
                    ranking:'1',
                    user:'用户名',
                    account:'12***67',
                    grade:'90'
                  },{
                    ranking:'2',
                    user:'用户名',
                    account:'12***67',
                    grade:'90'
                  },{
                    ranking:'3',
                    user:'用户名',
                    account:'12***67',
                    grade:'90'
                  },
                  {
                    ranking:'4',
                    user:'用户名',
                    account:'12***67',
                    grade:'90'
                  },
                  {
                    ranking:'10',
                    user:'用户名',
                    account:'12***67',
                    grade:'90'
                  }
              ],
              userInfo:{
                  ranking:'4',
                  user:'用户名',
                  account:'12***67',
                  grade:'90'
              }

          }
        },
        // 计算属性
        computed:{
            
        },
        components:{
            BreadCrumb,SystemNav
        },
        methods:{

            // 此处需向后台传递什么参数来识别要获取的数据？
            getTrainRes(){
                this.$axios.get('#')
              //then获取成功；response成功后的返回值（对象）
              .then(response=>{
                 // 获取关键词及正确关键词标识
                 // this.sysKeys=response.sysKeys;
              })
              //获取失败
              .catch(error=>{
                  console.log(error);
              })
            },
            getTrainAnalysis(){
                this.$axios.get('#')
                //then获取成功；response成功后的返回值（对象）
                .then(response=>{
                   // 获取关键词及正确关键词标识
                   // this.sysKeys=response.sysKeys;
                })
                //获取失败
                .catch(error=>{
                    console.log(error);
                })
            }
        }

    }
</script>

<style scoped>

</style>
