<template>
    <div class="report">
        <div class="card">
            <div class="card-body consult">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="text-center exam-result-score mb-5">
                            <span class="star-big">
                                <img src="../assets/star1.png" alt="">
                            </span>
                            <span>您共学习了{{statistic.sysNum}}个制度，做过{{statistic.train}}次训练，平均得分{{statistic.average}}</span>
                            <span class="star-small">
                                <img src="../assets/star2.png" alt="">
                            </span>
                        </div>
                        <div class="rank-wrap">
                            <p class="rank-title">
                                <span class="underline"></span>
                                <span>训练榜</span>
                                <span class="underline"></span>
                            </p>
                            <p class="rank-label">
                                <span>名次</span>
                                <span>用户名</span>
                                <span>账号</span>
                                <span>训练次数</span>
                            </p>
                            <div class="ranking">
                                <ul>
                                    <li class="rank-list active user_rank">
                                        <span class="user-rank-icon">
                                            <span>{{trainUser.ranking}}</span>
                                        </span>
                                        <span class="user-name">{{trainUser.user}}</span>
                                        <span class="user-account">{{trainUser.account}}</span>
                                        <span class="user-score">{{trainUser.grade}}</span>
                                    </li>
                                    <li v-for="item in trainList" class="rank-list">
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
                        <div class="rank-wrap">
                            <p class="rank-title">
                                <span class="underline"></span>
                                <span>学霸榜</span>
                                <span class="underline"></span>
                            </p>
                            <p class="rank-label">
                                <span>名次</span>
                                <span>用户名</span>
                                <span>账号</span>
                                <span>总平均分</span>
                            </p>
                            <div class="ranking">
                                <ul>
                                    <li class="rank-list active user_rank">
                                        <span class="user-rank-icon">
                                            <span>{{averUser.ranking}}</span>
                                        </span>
                                        <span class="user-name">{{averUser.user}}</span>
                                        <span class="user-account">{{averUser.account}}</span>
                                        <span class="user-score">{{averUser.grade}}</span>
                                    </li>
                                    <li v-for="item in trainList" class="rank-list">
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
    </div>
</template>

<script>

    export default {
      name: "report",
      data(){
        return{
           statistic:{
              sysNum:'120',
              train:'12',
              average:'68'
           },
          trainList:[
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
          trainUser:{
                ranking:'4',
                user:'本人',
                account:'12***67',
                grade:'90'
          },
          averList:[
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
          averUser:{
              ranking:'4',
              user:'本人',
              account:'12***67',
              grade:'90'
          }

        }
      },
      components:{
      },
      methods:{
          
      }
    }
</script>

<style scoped>
    .rank-label span:nth-child(4){width: 100px;}
    @media (min-width: 1279px){
        .rank-label span:nth-child(3) {
          margin-left: 130px;
        }
    }
    @media (min-width: 1279px){
        .rank-label span:nth-child(3) {
           margin-left: 128px;
        }
    }
</style>
