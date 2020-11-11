# koa bodyparser middleware in bpframework.

### Middleware specification

https://github.com/bpcloud/middleware

### usage


Setup.

```js
import { Application } from 'bpframework';
import * as middleware_bodyparser from '@bpframework/middleware-koa-bodyparser';

// bodyparser middleware is used by default.
Application.use(middleware_bodyparser.middleware({
  onErrorBodyParser: (err:any, ctx:koa.Context)=>{
    ctx.response.status = 415;
  }
}));
Application.runKoa(...);
```
