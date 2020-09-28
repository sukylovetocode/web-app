// 按需引用方法
import MyText from './src/index.vue';

MyText.install = (Vue) => {
    Vue.component('MyText', MyText);
};

export default MyText;
