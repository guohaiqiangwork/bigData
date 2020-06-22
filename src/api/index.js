// 引入axios
import axios from 'axios'
// 引入qs库转换参数格式
import qs from 'qs'

// axios全局配置
axios.defaults.timeout = 3000                      // 超时时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'        // 配置请求头
axios.defaults.baseURL = 'http://service.bjxrkj.com'   // 配置接口地址

// 添加响应拦截器，统一处理服务器响应和异常
axios.interceptors.response.use(
    (response) => {
        // 请求正常则返回
        return Promise.resolve(response)
    },
    (error) => {
        // 请求错误进行的处理可以写在这里
        // eslint-disable-next-line no-undef
        if (err && err.response) {
            // eslint-disable-next-line no-undef
            switch (error.response.status) {
                case 400:
                    error.message = '错误请求';
                    break;
                case 401:
                    error.message = '未授权，请重新登录';
                    break;
                case 403:
                    error.message = '拒绝访问';
                    break;
                case 404:
                    error.message = '请求错误,未找到该资源';
                    break;
                case 405:
                    error.message = '请求方法未允许';
                    break;
                case 408:
                    error.message = '请求超时';
                    break;
                case 500:
                    error.message = '服务器端出错';
                    break;
                case 501:
                    error.message = '网络未实现';
                    break;
                case 502:
                    error.message = '网络错误';
                    break;
                case 503:
                    error.message = '服务不可用';
                    break;
                case 504:
                    error.message = '网络超时';
                    break;
                case 505:
                    error.message = 'http版本不支持该请求';
                    break;
                default:
                    error.message = `连接错误${error.response.status}`
            }
        }
        return Promise.reject(error)
    }
)

export default {
    /**
     * post方法，对应post请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    post(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(params))
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    /**
     * get方法，对应get请求
     * @param {String} url [请求的url地址]
     * @param {Object} _params [请求时携带的参数]
     */
    // eslint-disable-next-line no-unused-vars
    get(url, _params) {
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-undef
            axios.get(url, { params: _params })
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
}
