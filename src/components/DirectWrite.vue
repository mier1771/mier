<template>
    <div class="container direct_write">
        <div class="row">
            <div class="col-12"> 
                <bread-crumb :breadList="breadList"></bread-crumb>
            </div> 
        </div>
        <div class="row row-cards">
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">
                        <label class="form-label">公司应急招聘计划制度</label>
                    </div>
                    <div class="card-body p-0">
                        <div class="text-wrap">
                            <form method="post">
                                <!-- <div id="editorMenu" class="editorMenu"></div> -->
                                <!-- <div id="editor"  class="editor"></div> -->
                            </form>
                        </div>
                    </div>
                    <div class="card-footer text-right">
                        <button type="submit" class="btn btn-primary"> <a class="text-white" @click="submitDirect()">提交对比</a> </button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">直接写制度训练规范</div>
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
    // import Editor from 'wangeditor'

    export default {
        name: "direct_write",
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
              standard:'',
              editor: '',
              directCon:''
          }
        },
        mounted(){
          // wangeditor
            this.editor = new Editor('#editorMenu', '#editor')
            // this.editor.onchange = function () {
            //   this.formData.phone = this.$txt.html()
            // }
            // 上传图片到服务器，base64形式
            this.editor.customConfig.uploadImgShowBase64 = true
            // 隐藏网络图片
            this.editor.customConfig.showLinkImg = false
            // 创建一个富文本编辑器
            this.editor.create()
            // 富文本内容
            this.editor.txt.html()

        },
        // 计算属性
        computed:{
            
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
                  alert('网络错误，不能访问');
              })
          },
          addKey(key){
              this.key=$('#writeKey').val();
              $('#writeKey').val('');
          },
          deleteKey(keyindex){
              this.keyindex = keyindex;
          },
          submitDirect(){
              //将id和关键词传向后台
              let directCon = $("#editor").val();
              let sysId = this.$route.params.id;
              this.$axios.get('',{
                  params:{
                    id:sysId,
                    directCon:directCon
                  }
              }).then(function(response){
                  // 如果成功，跳转到测试结果页面
                  // this.$router.push({path:'/keyConsult'});
              })

              // 暂时代替
              alert(directCon);
              this.$router.push({path:'/directConsult'});

          }
        }

    }
</script>

<style scoped>
    .w-e-toolbar .w-e-menu{display: inline-block!important;}
    .editorMenu {
      border: 1px solid #ccc;
    }
    .editor {
      margin-top: -1px;
      border: 1px solid #ccc;
      min-height: 400px;
      height:auto;
    }
</style>
