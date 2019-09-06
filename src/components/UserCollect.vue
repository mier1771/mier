<template>
    <div class="collect">
        <!-- 没有数据 -->
        <div class="card" v-if="ishasList == 0">
            <div class="content-empty text-center m-md-9">
                <div class="empty-header mb-md-6">
                    <img class="img" src="../assets/empty-page.png">
                </div> 
                  <div class="text-muted">空空荡荡的～</div>
            </div>
        </div>

        <!-- 有数据 -->
        <div class="system-list" v-for="item in collectList" v-else>
              <p class="text-muted text-center">{{item.collectTime}}</p> 
              <div class="card no-border" v-for="sysCon in item.collectCon">
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
                        <a @click="clickKey(sysCon.id)">关键词写制度</a>
                        <a @click="clickDirect(sysCon.id)">直接写制度</a>
                    </div>
                  </div>  
              </div>
        </div>
    </div>
</template>

<script>

    export default {
      name: "collect",
      data(){
        return{
           collectList:[
              {
                  collectTime:"2019-08-3",
                  collectCon:[
                      {
                        id:0,
                        title:'公司应急招聘计划制度',
                        time:'2019-8-17',
                        eye:'200',
                        use:'5',
                        collect:'40',
                      },{
                        id:1,
                        title:'公司应急招聘计划制度',
                        time:'2019-8-12',
                        eye:'100',
                        use:'90',
                        collect:'20',
                      },{
                        id:2,
                        title:'公司应急招聘计划制度',
                        time:'2019-8-19',
                        eye:'400',
                        use:'60',
                        collect:'1',
                      }
                  ]
              },{
                  collectTime:"2019-07-1",
                  collectCon:[
                      {
                        id:3,
                        title:'公司应急招聘计划制度',
                        time:'2019-8-17',
                        eye:'200',
                        use:'5',
                        collect:'40',
                      }
                  ]
              }
          ]
        }
      },
      computed:{
          ishasList:function(){
              return this.collectList.length;
          }
      },
      components:{
      },
      methods:{
          clickTitle(conid){
             this.$router.push({
                path:'/systemCon',
                params:{
                 id : conid
                }
             })
          },
          clickKey(conid){
              this.$router.push({
                path:'/keyWrite',
                params:{
                 id : conid
                }
             })
          },
          clickDirect(conid){
              this.$router.push({
                path:'/directWrite',
                params:{
                 id : conid
                }
             })
          }
      }
    }
</script>

<style scoped>
    .list-inline-item.text-center{vertical-align: bottom;}
</style>
