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
                        <p>上次登录地点: <span>武汉</span></p>

                    </div>
                </el-card>
                <el-card style="margin-top: 20px;height: 460px">
                    <el-table :data="tableData" style="width: 100%">
                        <!-- <el-table-column prop="name" label="课程" width="180">
                        </el-table-column>
                        <el-table-column prop="todayBuy" label="今日购买" width="180">
                        </el-table-column>
                        <el-table-column prop="monthBuy" label="本月购买">
                        </el-table-column>
                        <el-table-column prop="totalBuy" label="总购买">
                        </el-table-column> -->
                        <el-table-column v-for="(key, val) in tableLabel" :prop="val" :label="key"
                            width="180"></el-table-column>
                    </el-table>
                </el-card>
            </el-col>
            <!-- 右侧界面 -->

            <el-col :span="16">
                <div class="num">
                    <el-card v-for="item in countData" :key="item.name" :body-style="{display: 'flex', padding: 0}">
                        <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
                        <div class="detail">
                            <p class="price">¥{{item.value}}</p>
                            <p class="name ">{{item.name}}</p>
                        </div>
                    </el-card>
                </div>

                <el-card style="height: 280px;">
                    <div ref="echarts1"></div>
                </el-card>
                <div class="graph">
                        <el-card style="height:260px"></el-card>
                        <el-card style="height:260px"></el-card>
                    </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {getData} from "../api"
import * as echarts from 'echarts'
export default {
    data() {
        return {
            tableData: [
          {
            name: 'oppo',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: 'vivo',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: '苹果',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: '小米',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: '三星',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: '魅族',
           todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          }
        ],
countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],

            tableLabel: {
                name: '课程',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买数',

            }
        }
    },
    mounted() {
        //获取data
        getData().then((data) => {
            const {tableData} = data.data
            console.log('hello')
            console.log(data.data)
            this.tableData = tableData
            //基于准备好的dom, 初始化echarts实例
            const echarts1 = echarts.init(this.$refs.echarts1);
            var option = {}

            //处理数据xAxis
            const orderData = data.data

            console.log(orderData.data)
            // const xAxis = Object.keys(orderData.data)
            // console.log(xAxis)
        })
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
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999;

        span {
            color: #666;
            margin-left: 20px;
        }
    }


}

.num {
    display: flex;
    flex-wrap: wrap;
    // /贴边属性
    justify-content: space-between;
    .icon {
        width: 80px;
        height: 80px;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
        color: #fff;
    }

    .detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 15px;
        .price {
            font-size: 30px;
            margin-bottom: 10px;
            line-height: 30px;
            height: 30px;

        }

        .name {
            font-size: 14px;
            text-align: center;
            color: #9999
        }
    }
    .el-card {
        width: 32%; 
        margin-bottom: 20px;
    }


}

.graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
        width: 48%;
    }
}
</style>