<template>
    <div class="crumbs">
        <!-- <span>当前位置：</span> -->
        <!-- <span v-for="(item,index) in breadList"  separator="/" >
            <router-link :to="{ path: item.path }">{{item.name}}</router-link>
            <span v-if="breadList.name != '' ">/</span>
            <span v-else></span>
        </span>
        <span v-for="(item, index) in breadList"></span> -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in breadList" :key="index"  :to="{ path:item.path }">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div> 
</template>

<script>
    
export default{
    name:'crumbs',
    data() {
        return {
           breadList: [] // 路由集合
        };
     },
    watch: {
        $route() {
           this.getBreadcrumb();
        }
    },
    methods: {
        isHome(route) {
           return route.name === "home";
        },
        getBreadcrumb() {
            let matched = this.$route.matched;
            //如果不是首页
            if (!this.isHome(matched[0])) {
                matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
            }
            this.breadList = matched;
        }
    },
    created() {
        this.getBreadcrumb();
    }
    // props:['breadList']
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

