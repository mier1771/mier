<template>
    <div class="history">
        <!-- 没有数据 -->
        <div class="card" v-if="ishasList==0">
            <div class="content-empty text-center m-md-9">
                <div class="empty-header mb-md-6">
                    <img class="img" src="../assets/empty-page.png">
                </div> 
                  <div class="text-muted">空空荡荡的～</div>
            </div>
        </div>

        <!-- 有数据 -->
        <div class="system-list" v-for="item in historyList" v-else>
              <p class="text-muted text-center">{{item.historyTime}}</p> 
              <div class="card no-border" v-for="sysCon in item.historyCon">
                  <div class="card-body d-flex">
                        <h4 class="font-weight-normal">
                            <a @click="clickTitle(sysCon.id)">{{sysCon.title}}</a>
                        </h4>
                        <span class="text-nowrap text-muted ml-auto">{{sysCon.time}}</span>
                  </div>
                  <div class="card-footer"> 
                    <div class="text-muted left tag-line "> 
                        <span>浏览量：{{sysCon.eye}}</span><em> |</em>
                        <span>训练量：{{sysCon.use}}</span><em> |</em>
                        <span>收藏量：{{sysCon.collect}}</span>
                    </div>
                    <div class="right text-muted"> 
                        <span>得分：{{sysCon.grade}}</span>
                    </div>
                  </div>  
              </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: "history",
      created(){
        console.log(this.historyList);
      },
      data(){
        return{
          historyList:[
              {
                  historyTime:"2019-08-3",
                  historyCon:[
                      {
                        id:0,
                        title:'公司应急招聘计划制度',
                        time:'2019-8-17',
                        eye:'200',
                        use:'5',
                        collect:'40',
                        grade:'70'
                      },{
                        id:1,
                        title:'公司应急招聘计划制度',
                        time:'2019-8-12',
                        eye:'100',
                        use:'90',
                        collect:'20',
                        grade:'40'
                      },{
                        id:2,
                        title:'公司应急招聘计划制度',
                        time:'2019-8-19',
                        eye:'400',
                        use:'60',
                        collect:'1',
                        grade:'80'
                      }
                  ]
              },{
                  historyTime:"2019-07-1",
                  historyCon:[
                      {
                        id:3,
                        title:'公司应急招聘计划制度',
                        time:'2019-8-17',
                        eye:'200',
                        use:'5',
                        collect:'40',
                        grade:'70'
                      },{
                        id:4,
                        title:'公司应急招聘计划制度',
                        time:'2019-8-12',
                        eye:'100',
                        use:'90',
                        collect:'20',
                        grade:'40'
                      },{
                        id:5,
                        title:'公司应急招聘计划制度',
                        time:'2019-8-19',
                        eye:'400',
                        use:'60',
                        collect:'1',
                        grade:'80'
                      }
                  ]
              }
          ],
        }
      },
      computed:{
         ishasList:function(){
            return this.historyList.length;
         }
      },
      components:{
          
      },
      methods:{
          clickTitle(titleid){
              window.open('keyConsult?id='+titleid);
          },
      }
    }
</script>

<style scoped>
    .list-inline-item.text-center{vertical-align: bottom;}
    .font-weight-normal a{cursor: pointer;}
</style>
