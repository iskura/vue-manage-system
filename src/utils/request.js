/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-16 21:17:06
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-01-19 17:03:23
 */
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json'
const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    baseURL: 'https://server.angoykeith.xyz/',
    // timeout: 8000
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
