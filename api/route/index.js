import KoaRouter from 'koa-router';
const router = KoaRouter();
import UserCtrl from '../controllers/user/user';

router.get('/api/user/list', UserCtrl.getList);

export default router;
