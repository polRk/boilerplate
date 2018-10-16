import { App } from '../src';
import * as request from 'supertest';

const app = new App(5000).app;

test('Init', async () => {
  const response = await request(app.callback()).get('/');
  expect(response.status).toEqual(200);
  expect(response.type).toEqual('application/json');
  expect(response.body).toEqual({ status: 200 });
});
