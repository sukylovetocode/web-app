// 按需引用方法
import MyImage from './src/index.vue';

MyImage.install = (Vue) => {
    Vue.component('MyImage', MyImage);
};

export default MyImage;
