import service from '../utils/request'
/***
 * 登录接口
 */
export function login(data){
    return service.request({
        url:'/login/',
        method:'post',
        data
    })
}

/***
 * 登录验证码
 */
export function getSms(data){
    return service.request({
        url:'/getSms/',
        method:'post',
        data
    })
}
/**
 * 注册接口
 */
export function register(data){
    return service.request({
        url:'/register/',
        method:'post',
        data
    })
}