<template>
    <div>
        <!-- 内容框架 总数为24 -->
        <el-row>
            <!-- 左侧界面 -->
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
                <el-card class="box-card">
                    <div class="user">
                        <img src="../assets/neymar.png" alt="" srcset="">
                        <div class="userinfo">
                            <p class="name">Admin</p>
                            <p class="access">超级管理员</p>
                        </div>
                    </div>
                    <div class="login_info">
                        <p>上次登录时间: <span>2021-7-19</span></p>
                        <p>上次登录地点:  <span>武汉</span></p>

                    </div>
                </el-card>
            </el-col>
            <!-- 右侧界面 -->
            <el-col :span="16">
                <div class="grid-content bg-purple-light">dd</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.user {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;

    img {
        margin-right: 40px;
        height: 150px;
        width: 150px;
        border-radius: 50%;
    }
}
.userinfo {
        .name {
            font-size: 32px;
            margin-bottom: 10px
        }

        .access {
            color: #999;
        }
    }


.login_info {
    p{
        line-height: 28px;
        font-size: 14px;
        color: #999;
        span {
                color:  #666;
                margin-left: 20px;
            }
    }


}
</style>