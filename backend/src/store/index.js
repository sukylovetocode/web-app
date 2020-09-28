import Vue from 'vue';
import Vuex from 'vuex';
 /* eslint-disable */
Vue.use(Vuex);

// pages保存得json 信息
// elements 保存得json信息
const defaultPage = {
  name: 'mypage',
  elements: [],
};

const defaultElement = {
  computedStyle: {
    width: '500',
    heiht: '500',
    left: '500',
    top: '300',
    position: 'absolute',
  },
  elName: '',
  id: '',
};

function copy(mainObj) {
  let objCopy = {}; // objCopy 将存储 mainObj 的副本
  let key;
 
  for (key in mainObj) {
    objCopy[key] = mainObj[key]; // 将每个属性复制到objCopy对象
  }
  return objCopy;
}

/**
 * 生成uuid方法
 * @returns {string}
 */
export const createUUID = function () {
	var d = new Date().getTime();
	if (window.performance && typeof window.performance.now === "function") {
		d += performance.now(); //use high-precision timer if available
	}
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});
	return uuid;
}

export default new Vuex.Store({
  state: {
    token: '',
    menu: [],
    page: defaultPage,
    activeElement: '',
  },
  mutations: {
    GENERTATE_ROUTES(state, data) {
        state.menu = data;
      },
      ADD_ELEMENT(state, type) {
        let element = copy(defaultElement);
        element.elName = type;
        element.id = createUUID();
        state.page.elements.push(element);
      }, 
      SET_ACTIVE_ELEMENT(state, data) {
        state.activeElement = data;
      }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      commit('GENERTATE_ROUTES', data);
    },
    addElement({ commit }, type) {
      console.log(type);
      commit('ADD_ELEMENT', type);
    },
    setActiveElement({ commit }, data){
      commit('SET_ACTIVE_ELEMENT', data);
    },
  },
  getters: {
    get_menu(state) {
      return state.menu;
    },
  },
  modules: {
  },
});
