import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    /* component:()=>import() */
    component: Home,
    children: [
      {
        path: '/table2excel',
        name: 'TableToExcel',
        component: () => import('../views/pages/TableToExcel.vue'),
      },
      {
        path: '/uploadcontent',
        name: 'UploadContent',
        component: () => import('../views/pages/UploadContent.vue'),
      },
      {
        path: '/validateCode',
        name: 'ValidateCode',
        component: () => import('../views/pages/validateCode.vue'),
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/pages/permission/user.vue'),
      },
      {
        path: '/role',
        name: 'Role',
        component: () => import('../views/pages/permission/role.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 配置全局路由,路由守卫
const whiteList = ['/login'];
router.beforeEach(async (to, from, next) => {
  if (whiteList.includes(to.path)) {
    next();
  } else {
    // 检测是否有权限进入
    next();
  }
});

export default router;
