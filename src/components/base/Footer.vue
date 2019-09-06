<template>
    <div class="footer-wrap">
        <div class="footer">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                      <div class="col-6 col-md-3" v-for="item in footArr">
                          <ul class="list-unstyled mb-2" v-for="item in item.fItem">
                              <li>
                                <a target="_blank" :href="item.url">{{item.title}}</a>
                              </li>                                  
                          </ul>
                      </div>
                      <!-- 站内链接 -->
                      <div class="col-6 col-md-3">
                          <ul class="list-unstyled mb-2">
                              <li  v-for="item in station">
                                  <router-link :to="item.url">
                                      {{item.title}}
                                  </router-link>
                              </li>                                  
                          </ul>
                      </div>
                     
                      <div class="col-6 col-md-3">
                          <ul class="list-unstyled mb-2">
                              <li v-for="(item, index) in infoArr">
                                  {{infoArr[index].title }}: {{infoArr[index].info}}
                              </li>
                            <!-- <li>：01084924759</li>
                            <li>客服邮箱：coursedu@163.com</li>
                            <li>地址：北京市朝阳区大屯路洛克时代中心A座802</li> -->
                          </ul>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div> 
        <footer class="footer footer-bottom">
            <div class="container">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-12 text-center">
                      © 2016-2019 北京课思国际教育科技有限公司 版权所有 
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data () {      
      return {
          footArr:[
              {
                 fItem:[
                    {
                      title:'课思国际',
                      url:'#'
                    },{
                      title:'课思在线',
                      url:'#'
                    },{
                      title:'人力资源教学资源库',
                      url:'#'
                    }
                 ] 
              },{
                 fItem:[
                    {
                      title:'制度设计相关课程',
                      url:'#'
                    },{
                      title:'人力资源相关课程',
                      url:'#'
                    },{
                      title:'24门新员工课程',
                      url:'#'
                    }
                 ] 
              }
          ],
          station:[
            {
              title:'关于我们',
              url:'/aboutUs'
            },{
              title:'使用说明',
              url:''
            }
          ],
          infoArr:[
            {
              title:'客服电话',
              info:'01084924759'
            },{
              title:'客服邮箱',
              info:'coursedu@163.com'
            },{
              title:'地址',
              info:'北京市朝阳区大屯路洛克时代中心A座802'
            }
          ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

