export default {
    state: {
        isCollapse: false,               //控制菜单展开还是收起       

        tabsList: [
            {
                path: "/",
                name: "home",                               //根据 element里面 el-icon-home. 进行动态命名

                label: "首页",
                icon: "s-home",
                url: "Home/Home"
            }
        ]//面包xue
    },
    mutations: {
        // 修改菜单展开收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },

        // 更新面包xue
        selectMenu(state, val) {
            console.log('selectMenu')
            console.log(val, `val`)
            //判断是否为首页
            if (val.name !== 'home') {
                const index = state.tabsList.findIndex(item => item.name === val.name)
                //如果不存在
                if(index === -1) {
                    state.tabsList.push(val)
                }
            }
        }
    }
}