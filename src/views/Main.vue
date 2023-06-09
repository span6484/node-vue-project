<template>
<div>  

    <el-container>
        <!-- 引入代码 https://element.eleme.io/#/zh-CN/component/container -->
    <el-aside width="200px">
        <common-aside-template/>
    </el-aside>
    <el-container>
        <el-header>Header</el-header>
        <el-main>

            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
  </div>
</template>

<script>
import CommonAsideTemplate from '../components/CommonAsideTemplate.vue'
    export default {
        data() {
            return {}
        },
        components: {CommonAsideTemplate}
    }
</script>