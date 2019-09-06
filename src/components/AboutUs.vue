<template>
    <div class="aboutus">
        <div class="banner">
            <img :src="bannerSrc">
            <div class="container">
                <h2>简洁、直观、强悍的制度实训系统，让实训更直观、简单。</h2>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12"> 
                    <div class="card">
                        <div class="card-body" v-html="singleCon" >
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
      name: "aboutus",
      created(){
          this.getAboutUs();
      },
      data(){
        return{
           bannerSrc:require("../assets/banner.jpg"),
           singleCon:''
        }
      },
      computed:{
        
      },
      components:{
      },
      methods:{
          getAboutUs(){
              // 从后台获取
              // this.$axios.get('#').then(
              //     response => {
              //         this.singleCon = response.data.results
              //     }
              // )
              // 假数据
              this.singleCon = '关于我们内容'
          }
      }
    }
</script>

<style scoped>
</style>
