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
                <div class="fixed-table-pagination" style="">
                    <div class="float-right pagination">
                        <ul class="pagination">
                            <li class="page-item page-pre" v-if="page.prevBtn==true" @click="_gotoPage('prev')">
                                <a class="page-link" href="javascript:;">&lt;</a>
                            </li>
                            <li class="page-item page-pre" v-if="page.prevBtn==false">
                                <a class="page-link" href="javascript:;">&lt;</a>
                            </li>
                            <li class="page-item" :class="{active:page.currentPage==index}" v-for="index in page.p1" @click="_gotoPage(index)">
                                <a class="page-link" href="javascript:;">{{index}}</a>
                            </li>
                            <li class="more" v-if="page.isShowMore1">...</li>
                            <li :class="{active:page.currentPage==index}" v-for="index in page.p2" @click="_gotoPage(index)">
                                <a class="page-link" href="javascript:;">{{index}}</a>
                            </li>
                            <li class="more" v-if="page.isShowMore2">...</li>
                            <li :class="{active:page.currentPage==index}" v-for="index in page.p3" @click="_gotoPage(index)">
                                <a class="page-link" href="javascript:;">{{index}}</a>
                            </li>
                            <li class="next" v-if="page.nextBtn==true" @click="_gotoPage('next')">
                                <a class="page-link" href="javascript:;">&gt;</a>
                            </li>
                            <li class="nextDisabled" v-if="page.nextBtn==false">
                                <a class="page-link" href="javascript:;">&gt;</a>
                            </li>
                        </ul>
                        <div class="num_total">
                            共 <span>{{page.allItems}}</span> 条信息，共 <span>{{page.allPages}}</span> 页
                        </div>
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
              "page" : {
                    "currentPage":1,
                    "allPages":10,
                    "allItems":100,
                    "pagesize":10,
                    "showBtn":5,
                    "nextBtn":true,
                    "prevBtn":false,
                    "isShowMore1":false,
                    "isShowMore2":false,
                    "p1":[],
                    "p2":[],
                    "p3":[],
                },
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
          pagination:function(){
                    var _this=this;
                    var i = _this.page.showBtn-2;
                    if(_this.page.currentPage==_this.page.allPages){_this.page.nextBtn=false;}
                    var p1=[],p2=[],p3=[];
                    if( _this.page.allPages < _this.page.showBtn ){
                        _this.page.isShowMore1=false;
                        _this.page.isShowMore2=false;
                        i = _this.page.allPages;
                        while(i){
                            p1.unshift(i--);
                        }
                    }else if(_this.page.allPages > _this.page.showBtn && _this.page.allPages < _this.page.showBtn+1){
                        _this.page.isShowMore1=false;
                        _this.page.isShowMore2=true;
                        if(_this.page.currentPage<3){
                            p1=[1,2,3];
                            p3.push(_this.page.allPages);
                        }else{
                            p1=[1];
                            i=_this.page.showBtn-2;
                            while(i--){
                                p3.unshift( _this.page.allPages-- );
                            }
                        }
                    }else{
                        if(_this.page.currentPage<3){
                            p1=[1,2,3];
                            p3.push(_this.page.allPages);
                            _this.page.isShowMore1=false;
                            _this.page.isShowMore2=true;
                        }else if(_this.page.currentPage>_this.page.allPages-2){
                            _this.page.isShowMore1=true;
                            _this.page.isShowMore2=false;
                            p1=[1];
                            i=3;
                            var allPages = _this.page.allPages;
                            while(i--){
                                p3.unshift( allPages-- );
                            }
                        }else{
                            _this.page.isShowMore1=true;
                            _this.page.isShowMore2=true;
                            if(_this.page.currentPage==3){
                                _this.page.isShowMore1=false;
                            }else if(_this.page.currentPage==_this.page.allPages-1){
                                _this.page.isShowMore2=false;
                            }
                            p1=[1];
                            p3.push(_this.page.allPages);
                            var middle=parseInt((_this.page.showBtn-2)/2);
                            var start=_this.page.currentPage-middle;
                            i = _this.page.showBtn-2;
                            while(i--){
                                p2.push(start++);
                            }
                        }
                    }
                    _this.page.p1=p1;
                    _this.page.p2=p2;
                    _this.page.p3=p3;
                }
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
            _gotoPage:function(n){
                    var _this=this;
                    if(n==_this.page.currentPage){
                        return;
                    }
                    if(n==1){
                        _this.page.prevBtn=false;
                    }else{
                        _this.page.prevBtn=true;
                    }
                    if(n==_this.page.allPages){
                        _this.page.nextBtn=false;
                    }else{
                        _this.page.nextBtn=true;
                    }
                    if(typeof n=='number'){
                        _this.page.currentPage=n;
                    }else if(n=='next'){
                        _this.page.currentPage++;
                    }else if(n=='prev'){
                        _this.page.currentPage--;
                    }
                    if(_this.page.currentPage==_this.page.allPages){_this.page.nextBtn=false;}
                    _this.pagination;
                },
        },ready : function(){
                var _this = this;
                _this.pagination;
            }

    }
</script>

<style scoped>

</style>
