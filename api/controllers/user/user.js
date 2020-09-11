import Mongoose from 'mongoose';
import UserSchema from '../../dbs/models/user';
const UserModel = Mongoose.model('User', UserSchema);

class UserController{
    async getList(ctx){
        // let user = new UserModel({
        //     name: 'eee'
        // });
        // user.save();
        let result = await UserModel.find();
        ctx.body = result;
    }
    async newRole(ctx){
        console.log(ctx.request.body);
        ctx.body = {
            msg: '请求成功',
        }
    }
}

export default new UserController();