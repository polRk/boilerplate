import * as Koa from 'koa';

export class App {
  private port: number;
  private app: Koa;

  public constructor(port: number) {
    this.port = port;
    this.app = new Koa();
  }
  
  start = () => {
    this.app.listen(this.port);
  }
}
