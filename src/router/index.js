import Vue from 'vue'
import VueRouter, { RouterView } from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/home',
        children: [
            //子路由
            {path: 'home', component: Home},        //首页
            {path: 'users', component: Users},       //用户管理
            {path: 'mall', component: Mall},       //商品管理
            {path: 'page1', component: PageOne},       //商品管理
            {path: 'page2', component: PageTwo}       //商品管理

        ]
    }

]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。 
const router = new VueRouter({
    routes 

})

export default router
