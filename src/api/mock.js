import Mock from "mockjs";
Mock.mock('http://192.168.50.137:8080/api/home/getData','get', function () {
    // 拦截到请求后的处理逻辑
    console.log('拦截到');
    
    // 生成模拟数据并返回
    return []
  });