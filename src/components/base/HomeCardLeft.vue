<template>
    <div class="card card-aside">
        <router-link :to="cardPath" class="card-aside-column" :style="{backgroundImage:'url(' + imgUrl + ')'}"></router-link>
        <div class="card-body d-flex flex-column  p-6 py-md-8">
            <h4> <router-link :to="cardPath">{{cardTitle}}</router-link> </h4>
            <div class="text-muted">{{ cardDetail }}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
        cardPath:{default:'',type:String},
        imgUrl:{default:'', type:String},
        cardTitle:{default:'', type:String},
        cardDetail:{default:'', type:String}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

