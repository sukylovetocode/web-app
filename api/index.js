const koa = require('koa');
const koaRouter = require('koa-router');

const app = new koa();

const router = koaRouter();

router.get('/abc',async (ctx)=>{
    ctx.body="首页";
});
 
app.use(router.routes());
app.use(router.allowedMethods());
/*
 * router.allowedMethods()作用： 这是官方文档的推荐用法,我们可以
 * 看到 router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有
 * 路由中间件最后调用.此时根据 ctx.status 设置 response 响应头 
 *
 */
app.listen(3000);