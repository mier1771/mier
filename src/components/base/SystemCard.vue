<template>
    <div class="card no-border">
          <div class="card-body d-flex">
                <h4 class="font-weight-normal">
                    <router-link :to="{path:sysConPath, query:{id:sysCon.id}}">{{sysCon.title}}</router-link>
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
                <router-link :to="{path:'/keyWrite'}">关键词写制度</router-link>
                <router-link :to="{path:'/directWrite'}">直接写制度</router-link>
            </div>
          </div>
    </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
        sysCon:{
            type:Object,
            required:true
        },
        sysConPath:{
            type:String,
            required:true
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

