module.exports = () => {
    return async (ctx, next) => {
        console.log('ctx');
        console.log('ctx', ctx.url);
        // ctx.set('Access-Control-Allow-Origin', '');
        ctx.set('Access-Control-Allow-Credentials', true);
        ctx.set('Access-Control-Allow-Headers', 'content-type');
        ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, HEAD, PUT, POST, DELETE, PATCH');
        ctx.set('TEST', 'yyx');
        if (ctx.method == 'OPTIONS') {
            ctx.body = 200; 
        } else {
            await next();
        }
    }
}
