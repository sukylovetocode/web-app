

class AllController{
    async uploadMain(ctx){
        // let user = new UserModel({
        //     name: 'eee'
        // });
        // user.save();
        let result = await UserModel.find();
        ctx.body = result;
    }
   
}

export default new AllController();