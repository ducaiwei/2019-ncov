const Router = require('koa-router');
const { API_BASE_URL } = require('../../constants');
const request = require('request');
const queryString = require('query-string');

let api = new Router();

api.get('/overall', (ctx) => {
    ctx.body = ctx.req.pipe(request(`${API_BASE_URL}/api/overall`))
});
api.get('/area', (ctx) => {
    const query = queryString.stringify(ctx.query);
    ctx.body = ctx.req.pipe(request(`${API_BASE_URL}/api/area?${query}`))
})
module.exports = api;