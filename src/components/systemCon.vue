<template>
    <div class="container system_con">
        <div class="row">
            <div class="col-12"> 
                <bread-crumb :breadList="breadList"></bread-crumb>
            </div> 
        </div>
        <div class="row row-cards">
            <div class="col-md-9">
                <div class="card con-card">
                    <div class="card-header">
                      <h3 class="card-title">{{systemCon.title}}</h3>
                      <div class="text-muted tag-line"> 
                          <span>浏览量：{{systemCon.eye}}</span><em> |</em>
                          <span>训练量：{{systemCon.use}}</span><em> |</em>
                          <span>收藏量：{{systemCon.collect}}</span>
                      </div>
                    </div>
                    <div class="card-body" id="">
                        {{systemCon.content}}
                        <p><b>制度名称</b></p>
                        <p><b>工作分析实施细则</b></p>
                        <p><b>受控状态</b></p>
                        <p><b>编</b><b>号</b></p> 
                        <p><b>执行部门</b></p>
                        <p><b>监督部门</b></p>
                        <p><b>编修部门</b></p>
                        <p><b>第</b><b>1</b><b>章</b><b>总则</b></p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <system-nav :systemNav="masterNavs" :systemId="sysId"></system-nav>
                <a href="#" class="btn btn-primary"><i class="fa fa-heart-o"></i>收藏制度</a>
            </div>
        </div>
    </div>
</template>

<script>
    import BreadCrumb from "./base/BreadCrumb.vue";
    import SystemNav from "./base/SystemNav.vue";

    export default {
        name: "system_con",
        created(){
            this.deatils()
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
                  }
              ],
              sysId:'',
              masterNavs:{
                title:"开始训练",
                nav:[
                  {
                      id:0,
                      title:'关键词训练',
                      url:'/keyWrite'
                  },{
                      id:1,
                      title:'直接写制度',
                      url:'/directWrite'
                  }
                ]
              },
              systemCon:{
                title:'',
                collect:'',
                eye:'',
                use:'',
                content:''
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
          deatils(){
              let sysId = this.$route.query.id;
              this.sysId = sysId;
              console.log(sysId)

              //将id传向后台获取数据
              this.$axios.get('',{
                  params:{
                    id:sysId
                  }
              }).then(function(response){
                  // 标题
                  // 制度内容
                  // 收藏量
                  //浏览量
                  //使用量
              })


              // 暂时示例数据
                this.systemCon.title="公司应急招聘计划制度";
                this.systemCon.collect="100";
                this.systemCon.eye="10";
                this.systemCon.use="20";
                this.systemCon.content="<p><b>制度名称</b></p><p><b>工作分析实施细则</b></p><p><b>受控状态</b></p><p><b>编</b><b>号</b></p> <p><b>执行部门</b></p>"

          }
        }

    }
</script>

<style scoped>

</style>
