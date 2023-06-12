<template>
<div>  

    <el-container>
        <!-- 引入代码 https://element.eleme.io/#/zh-CN/component/container -->
    <el-aside width="200px">
        <common-aside-template/>
    </el-aside>
    <el-container>
        <el-header>
            <common-header/>
        </el-header>
        <el-main>
            <!-- 路由出口 -->
            <!-- 路由匹配的组件渲染在这里 -->
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
  </div>
</template>

<script>
import CommonAsideTemplate from '../components/CommonAsideTemplate.vue'
import CommonHeader from '@/components/CommonHeader.vue';
    export default {
        data() {
            return {}
        },
        components: {
            CommonAsideTemplate,
            CommonHeader
        
        }
    }
</script>


<style scoped>
.el-header {
    padding:  0;
}
</style>