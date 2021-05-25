
import axios from 'axios'
import qs from 'qs'

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

// 封装get请求
const getRequest = (url, data) => axios.get(url, { params: data }).catch(res => res)

// 封装post请求
const postRequest = (url, data) => axios.post(url, data).catch(res => res)

// 请求拦截器
axios.interceptors.request.use(config => {
    if (Object.prototype.toString.call(config.data) !== '[object FormData]') {
        config.data = qs.stringify(config.data);
    }
    return config
})

// 响应拦截器
axios.interceptors.response.use(response => response.data)

export default {
    getRequest,
    postRequest
}