const Koa = require('koa');
const app = new Koa();
const cors = require('koa-cors');
const router = require('./router')
app.use(cors());
// 添加路由中间件并对请求做限制处理
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);