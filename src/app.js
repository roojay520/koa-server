import Koa from 'koa';
import middleware from './middleware';
import { API_CONFIG } from './config';

const app = new Koa();

middleware(app);

app.listen(API_CONFIG.PORT, '0.0.0.0', () => console.log(`Server running: ${API_CONFIG.HOST}:${API_CONFIG.PORT}`));
