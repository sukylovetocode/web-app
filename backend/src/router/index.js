import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
// import store from '../store/index';

Vue.use(VueRouter);

// 不需要权限的页面
const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

// 需要权限的路由
const asyncRouterMap = [
  {
    path: '/admin',
    name: 'Home',
    /* component:()=>import() */
    component: Home,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: 'table2excel',
        name: 'TableToExcel',
        component: () => import('../views/pages/TableToExcel.vue'),
        meta: {
          title: '表格下载',
        },
      },
      {
        path: 'uploadcontent',
        name: 'UploadContent',
        component: () => import('../views/pages/UploadContent.vue'),
        meta: {
          title: '上传',
        },
      },
      {
        path: 'validateCode',
        name: 'ValidateCode',
        component: () => import('../views/pages/validateCode.vue'),
        meta: {
          title: '验证码',
        },
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('../views/pages/permission/user.vue'),
        meta: {
          title: '用户管理',
        },
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('../views/pages/permission/role.vue'),
        meta: {
          title: '角色管理',
        },
      },
      {
        path: 'pageEditor',
        name: 'PageEditor',
        component: () => import('../views/pages/pageEditor/index.vue'),
        meta: {
          title: '页面可视化编辑',
        },
      },
    ],
  },
  {
    path: '/perm',
    name: 'Perm',
    meta: {
      title: '权限管理',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...constantRouterMap, ...asyncRouterMap],
});

// 配置全局路由,路由守卫
// const whiteList = ['/login'];
// router.beforeEach(async (to, from, next) => {
//   if (whiteList.includes(to.path)) {
//     if (to.path === '/login') {
//       store.dispatch('GenerateRoutes', asyncRouterMap).then(() => {
//         try {
//           router.addRoutes(asyncRouterMap);
//           next('/admin/user');
//         } catch (e) {
//           console.log(e);
//         }
//       });
//     }
//     next();
//   } else {
//     // 检测是否有权限进入
//     // 渲染我们的菜单
//    next();
//   }
// });

export default router;
