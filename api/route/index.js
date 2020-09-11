import KoaRouter from 'koa-router';
const router = KoaRouter();
import UserCtrl from '../controllers/user/user';
import UploadCtrl from '../controllers/upload';
import Multer from '@koa/multer';
const storage = Multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './static/uploads');
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + file.originalname);
    }
});
const Upload = Multer({
    storage
});
//upload
router.post('/api/upload/pic', Upload.single('pic'), UploadCtrl.pic);

router.post('/api/role/new', UserCtrl.newRole);

export default router;
