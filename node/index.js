const App = require('yeps');
const Router = require('yeps-router');
const server = require('yeps-server');
const serve = require('yeps-static');
const error = require('yeps-error');
const bodyparser = require('yeps-bodyparser');
const { resolve } = require('path');


const app = new App();
const router = new Router();

router.get('/test').then(async ctx => {
    ctx.res.writeHead(200);
    ctx.res.end('test');
});

app.all([
    serve({
        root: resolve(__dirname, 'public'),
        index: 'index.html',
        etag: true,
        gzip: true,
        maxage: 0,
    }),
    bodyparser(),
    error(),
]).then(
    router.resolve()
);

server.createHttpServer(app);