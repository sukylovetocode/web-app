class UploadController{
    async pic(ctx){
        console.log(ctx.file);
        ctx.body = {
            file: ctx.file.filename,
            msg: '上传成功',
        };
    }

    async avatar(ctx){

    }

    async song(ctx){

    }
}

export default new UploadController();