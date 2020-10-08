import axios from 'axios'
// 第一步，创建实例
const service = axios.create({
    baseURL:process.env.REACT_APP_API,
    timeout:5000
})

// 第二步，请求拦截
service.interceptors.request.use(function(config){
    console.log(process.env.REACT_APP_API)
    return config
},function(error){
    return Promise.reject(error)
})

// 第三部，相应拦截
service.interceptors.response.use(function(response){
    return response
},function(error){
    return Promise.reject(error)
})
export default service;