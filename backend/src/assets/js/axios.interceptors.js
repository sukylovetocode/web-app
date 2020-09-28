import axios from 'axios';
import Vue from 'vue';
import { Message, Loading } from 'element-ui';
import store from '../../store';

let loading;
// 请求拦截
axios.interceptors.request.use((request) => {
    // jwt 签名生成
    const req = request;
    // 发送全局消息
    loading = Loading.service({ fullscreen: true, background: '#000', text: '加载中，请稍后' });
    // 设置头部携带token
    if (store.state.token) {
        req.headers.Authorization = `token ${store.state.token}`;
    }
    return req;
});

// 响应拦截
axios.interceptors.response.use((response) => {
    if(response.code === 100){
        // 各种响应码
    }
    // 发送全局消息
    loading.close();
    Message('请求完成');
    return response;
}, function(err){
    return Promise.reject(error);
});

Vue.prototype.$axios = axios;
