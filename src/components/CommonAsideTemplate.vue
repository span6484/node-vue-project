<template>
    <div>

        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"                
            :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

            <!-- 收起显示后台， 全放开显示通用后台管理系统 -->
            <h3>{{isCollapse ? "后台" : "通用后台管理系统"}}</h3>
                    <!-- 增加了clickmenu clickmeu  实现点击菜单功能 --> 
            <el-menu-item @click="clickmenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">

                <!--        根据 element里面 el-icon-home. 进行动态命名 -->
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </el-menu-item>
            <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
                <template slot="title">
                    <i :class="`el-icon-${item.icon}`"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group  v-for="subItem in item.children" :key="subItem.path">
                    <!-- <i :class="`el-icon-${subItem.icon}`"></i> -->
                    <el-menu-item @click="clickmenu(subItem)" :index="subItem.path">{{ subItem.label }}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>


<!-- 添加作用域，使其仅适用于当前组件的模板。 -->
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    height: 100vh;
    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
    }

}
</style>

<script>
export default {
    data() {
        return {
            menuData: [
                {
                    path: "/",
                    name: "home",                               //根据 element里面 el-icon-home. 进行动态命名

                    label: "首页",
                    icon: "s-home",
                    url: "Home/Home"
                },
                {
                    path: "/mall",
                    name: "mall",
                    label: "商品管理",
                    icon: "video-play",
                    url: "MallManage/MallManage"
                },
                {
                    path: "/users",
                    name: "user",
                    label: "用户管理",
                    icon: "user",
                    url: "UserManage/UserManage"
                },
                {
                    label: "其他",
                    icon: "location",
                    children: [
                        {
                            path: "/page1",
                            name: "/page1",
                            label: "页面1",
                            icon: "setting",
                            url: "Other/PageOne"
                        },
                        {
                            path: "/page2",
                            name: "/page2",
                            label: "页面2",
                            icon: "setting",
                            url: "Other/PageTwo"
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        // 点击菜单
        clickmenu(item){
            console.log(item)
            //$route  当前页面具体路由
            //$router 表示整个实例
            //当页面的路由与跳转的路由不一致才允许跳转
            if(this.$route.path != item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
                this.$router.push(item.path)
            }
        }
    },

    computed: {

        //没有子菜单
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },

        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
    }
}
</script>

<style>
.el-menu {
    border-right: none;
}
</style>