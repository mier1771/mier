<template>
    <div class="container key_write">
        <div class="row">
            <div class="col-12"> 
                <bread-crumb :breadList="breadList"></bread-crumb>
            </div> 
        </div>
        <div class="row row-cards">
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">公司应急招聘计划制度</div>
                    </div>
                    <div class="card-body" id="card-body-0">
                        <div class="text-wrap">
                          <div class="example min-vh-20">
                              <ul class="tags">
                                  <li is="tag-item" class="tag" v-for="(keyword, index) in keywordTags" :key="index" @remove="keywordTags.splice(index, 1)">
                                      
                                  </li>

                                  <span v-for="(keyword, index) in keywordTags" :key="index" class="tag">
                                      {{keyword}}
                                      <a  class="tag-addon" @click="deleteKey(index)"><i class="fe fe-x"></i></a>
                                  </span>
                              </ul>
                          </div>
                          <form class="input-group my-3 my-md-5" @submit.prevent="addKey">
                              <input v-model="newKey" type="text" class="form-control" placeholder="请输入关键词" id="newKey" @keyup.enter="addKey()">
                              <span class="input-group-append">
                                  <button class="btn btn-orange" type="button" @click="addKey()">添加关键词</button>
                                  <span class="col-auto align-self-center">
                                      <span class="form-help" data-toggle="popover" data-placement="top" data-content="<p>您的得分=（总分/您写的关键词数量）*您答对的关键词数量</p>
                                      <p class='mb-0'></p>
                                      " data-original-title="" title="">?</span>
                                  </span>
                              </span>
                          </form>

                        </div>
                    </div>
                    <div class="card-footer text-right">
                        <button type="submit" class="btn btn-primary"> <a class="text-white" @click="submitKeywords()">提交对比</a> </button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">关键词训练规范</div>
                    </div>
                    <div class="card-body">
                        <ol class="text-muted">
                            <li>您输入的关键词数量需大于1,小于50.</li>
                            <li>您输入的关键词可为名词、形容词、动词.</li>
                            <li>添加关键词时，输入关键词，点击添加关键词按钮.</li>
                            <li>添加完关键词点击提交对比按钮，进行判分.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <system-nav :systemNav="masterNavs"></system-nav>
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
            // this.systemId()
            this.getStandard();
        },
        data(){
          return{
              sysId:'',
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
              key:'',
              keyindex:'',
              keywords:['a','b','c','d','e'],
              standard:''
          }
        },
        // 计算属性
        computed:{
            keywordTags(){
                const {key, keyindex,keywords} = this;
                // alert(keyindex)
                // let keywords = new Array();
                if (key) {
                    keywords.push(key);
                    // this.key = "";
                }
                if (keyindex) {
                    // alert(keyindex)
                    keywords.splice(keyindex,1);
                }
                console.log(keywords)
                return keywords;
                
            }
        },
        components:{
            BreadCrumb,SystemNav
        },
        methods:{
          // systemId(){
          //     let sysId = this.$route.query.systemId;
          //     this.sysId = sysId;
          //     console.log(sysId)
              
          // },
          getStandard(){
              this.$axios.get('#')
              //then获取成功；response成功后的返回值（对象）
              .then(response=>{
                 // 获取关键词书写规范
                 this.standard=response.standard;
              })
              //获取失败
              .catch(error=>{
                  console.log(error);
                  // alert('网络错误，不能访问');
              })
          },
          addKey(key){
              this.key=$('#writeKey').val();
              $('#writeKey').val('');
          },
          deleteKey(keyindex){
              this.keyindex = keyindex;
          },
          submitKeywords(){
              //将id和关键词传向后台
              let keywordTags = this.keywordTags;
              let sysId = this.$route.params.id;
              this.$axios.get('',{
                  params:{
                    id:sysId,
                    keywordTags:keywordTags
                  }
              }).then(function(response){
                  // 如果成功，跳转到测试结果页面
                  // this.$router.push({path:'/keyConsult'});
              })

              // 暂时代替
              alert(keywordTags);
              this.$router.push({path:'/keyConsult'});

          }
        }

    }
</script>

<style scoped>

</style>
