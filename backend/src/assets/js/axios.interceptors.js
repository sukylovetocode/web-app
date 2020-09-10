import axios from 'axios';
import Vue from 'vue';
import { Message, Loading } from 'element-ui';

let loading;
// 请求拦截
axios.interceptors.request.use((request) => {
    // 发送全局消息
    loading = Loading.service({ fullscreen: true, background: '#000', text: '加载中，请稍后' });
    return request;
});

// 响应拦截
axios.interceptors.response.use((response) => {
    // 发送全局消息
    loading.close();
    Message('请求完成');
    return response;
});

Vue.prototype.$axios = axios;
