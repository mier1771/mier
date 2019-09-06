<template>
    <div class="container master-systems">
        <div class="row">
            <div class="col-12"> 
                <bread-crumb :breadList="breadList"></bread-crumb>
            </div> 
        </div>
        <div class="row row-cards">
            <div class="col-md-3">
                <system-nav :systemNav="masterNavs"></system-nav>
            </div>
            <div class="col-md-9">
                <div class="system-list"> 
                    <div v-for="item in sysCon.sysconArr">
                        <system-card :sysCon="item" :sysConPath="sysCon.sysConPath"></system-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BreadCrumb from "./base/BreadCrumb.vue";
    import SystemCard from "./base/SystemCard.vue";
    import SystemNav from "./base/SystemNav.vue";

    export default {
        name: "master-systems",
        data(){
          return{
              breadList:[
                {
                  path:'/masterSystems',
                  name:'应知应会',
                  redirect:'dashboard'
                }
              ],
              masterNavs:{
                title:"维度训练",
                nav:[
                  {
                      id:0,
                      title:'制度分类一',
                      url:'/masterSystems'
                  },{
                      id:1,
                      title:'制度分类二',
                      url:'/masterSystems'
                  }
                ]
              },
              sysCon:{
                  sysConPath:'systemCon',
                  sysconArr:[
                      {
                        id:0,
                        title:'公司应急招聘计划制度',
                        time:'2019-8-12',
                        eye:'100',
                        use:'12',
                        collect:'20'
                      },{
                        id:1,
                        title:'公司应急招聘计划制度',
                        time:'2019-8-12',
                        eye:'100',
                        use:'12',
                        collect:'20'
                      }
                  ]
              }
          }
        },
        components:{
            BreadCrumb,SystemNav,SystemCard
        },
        methods:{
           
        }
    }
</script>

<style scoped>

</style>
