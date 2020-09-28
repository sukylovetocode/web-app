import MyImage from './image/index';
import MyText from './text/index';
 /* eslint-disable */
const components = [
    MyImage,
    MyText,
];

// 定义install方法
const install = (Vue) => {
	components.map( (component) => {
        Vue.component(component.name, component);
    });
};

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export {
    MyImage,
    MyText,
};

export default {
    install,
};
