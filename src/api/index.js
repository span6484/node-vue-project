import http from "../util/request";

// 请求首页数据
export const getData = () => {
    //返回一个promise对象
    return http.get(`/api/home/getData`)
}