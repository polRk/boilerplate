import * as Koa from 'koa';
import * as Router from 'koa-router';

export class App {
  port: number;
  app: Koa;
  router: Router;

  public constructor(port: number) {
    this.port = port;
    this.app = new Koa();
    this.router = new Router();
    this.mountRoutes();
  }

  mountRoutes = () => {
    this.router.get('/', async (ctx) => {
      ctx.body = { status: 200 };
    });
    this.app.use(this.router.routes());
  };

  start = () => {
    this.app.listen(this.port);
  };
}
