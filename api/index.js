import Koa from 'koa';
import Mongoose from 'mongoose';
import DBS from './dbs/config';
import BodyParser from 'koa-bodyparser';
import Cors from 'koa2-cors';
import Compress from 'koa-compress';
import Router from './route/index';
import Logger from 'koa-logger';
import Static from 'koa-static';
import Helmet from 'koa-helmet';

// 链接数据库
Mongoose.connect(DBS.ADDRESS, { useNewUrlParser: true , useUnifiedTopology: true}).then(()=>{
    console.log('connect to database');
}, err => {
    console.log(err);
});

const app = new Koa();
app.use(BodyParser()); // json解析
app.use(Cors()); // 跨域
// gzip 压缩
app.use(Compress({
    threshold: 2048
}));
app.use(Helmet());// 提高安全性
// 静态资源服务器
app.use(Static(__dirname+'/static'));
// logs
app.use(Logger((str, args) => {
    console.log(str);
    // 将数据保存到logs下
}));
// router
app.use(Router.routes());
app.use(Router.allowedMethods());
/*
 * router.allowedMethods()作用： 这是官方文档的推荐用法,我们可以
 * 看到 router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有
 * 路由中间件最后调用.此时根据 ctx.status 设置 response 响应头 
 *
 */
app.listen(3000);
console.log('We are now listening to port 3000');