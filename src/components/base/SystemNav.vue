<template>
    <div class="card pers-tab sys-tab">
        <div class="card-header">
            <div class="card-title">{{systemNav.title}}</div>
        </div>
        <ul>
            <li v-for="(item, index) in systemNav.nav" @click="routerLink(index)" :key="index">
                <a class="navIndex === index?'active':''">{{ item.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'card',
    data(){
        return {
            navIndex:0
        }
    },
    props: ['systemNav'],
    methods:{
        routerLink(index){
            // 点击哪个路由就赋值给自定义的下标
            this.navIndex = index;
            this.gotoSysList(index);
        },

        // 进入点击的分类
        gotoSysList(index) {
            this.$router.push({
              path: '/listSystems',query:{id:index}
            });
        },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    li{cursor: pointer;}
</style>

