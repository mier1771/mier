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
                <div class="page-header page-search">
                  <div class="page-subtitle text-muted">共{{systemNum}}条制度</div>
                  <div class="page-options d-flex">
                    <select class="form-control custom-select w-auto" v-model="selected" @change="setOrderType(selected)">
                        <option v-for="option in options" :value="option.value">{{ option.text }}</option>
                    </select>
                    <div class="input-icon ml-2">
                      <span class="input-icon-addon">
                        <i class="fe fe-search"></i>
                      </span>
                      <input type="text" v-model="searchText" class="form-control w-10" placeholder="输入关键字搜索">
                    </div>
                  </div>
                </div>
                <div class="system-list"> 
                    <div v-for="item in filterSystems">
                        <system-card :sysCon="item" :sysConPath="sysConPath"></system-card>
                    </div>
                </div>
                <div class="fixed-table-pagination">
                    <div class="float-right pagination">
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-sizes="[20, 50, 100, 150]"
                            :page-size="20"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="400">
                        </el-pagination>
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
                  path:'/listSystems',
                  name:'制度库',
                  redirect:'dashboard'
                }
              ],
              masterNavs:{
                title:"分类",
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
              systemNum:0,
              selected:'0',
              searchText:'',
              orderType:0,//默认按时间顺序
              options:[
                  {
                    value:'0',
                    text:'最新',
                  },
                  {
                    value:'1',
                    text:'浏览量',
                  },{
                    value:'2',
                    text:'使用量',
                  },{
                    value:'3',
                    text:'收藏量',
                  }
              ],
              urrentPage1: 5,
              currentPage2: 5,
              currentPage3: 5,
              currentPage4: 1,
              sysConPath:'systemCon',
              sysconArr:[
                  {
                    id:0,
                    title:'公司应急招聘计划制度',
                    time:'2019-8-17',
                    eye:'200',
                    use:'5',
                    collect:'40'
                  },{
                    id:1,
                    title:'公司应急招聘计划制度',
                    time:'2019-8-12',
                    eye:'100',
                    use:'90',
                    collect:'20'
                  },{
                    id:2,
                    title:'公司应急招聘计划制度',
                    time:'2019-8-19',
                    eye:'400',
                    use:'60',
                    collect:'1'
                  }
              ]
          }
        },
        // 计算属性
        computed:{
          filterSystems(){
              const {searchText, sysconArr, orderType} = this;
              let filterArr = new Array();
              // 过滤数组
              filterArr = sysconArr.filter(p => p.title.indexOf(searchText)!==-1);

              // 排序
              if (orderType) {
                filterArr.sort(function(p1,p2){
                    if (orderType === '0') {
                      var p2time = p2.time.replace(/-/ig,'');
                      var p1time = p1.time.replace(/-/ig,'');
                      return p2time - p1time;
                    }else if(orderType === '1'){
                      return p2.eye - p1.eye;
                    }else if(orderType === '2'){
                      return p2.use - p1.use;
                    }else if (orderType === '3') {
                      return p2.collect - p1.collect;
                    }
                })
              }
              return filterArr;
          },
        },
        components:{
            BreadCrumb,SystemNav,SystemCard
        },
        created:function(){
            // 获取制度总条数
            // systemNum
        } ,
        methods:{
            setOrderType(orderType){
              this.orderType = orderType
            },
            handleSizeChange(val) {

              console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
              console.log(`当前页: ${val}`);
            }
        }

    }
</script>

<style scoped>

</style>
