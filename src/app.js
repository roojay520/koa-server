const Koa = require('koa');
const middleware = require('./middleware');
const { API_CONFIG } = require('./config');

const app = new Koa();

middleware(app);

app.listen(API_CONFIG.PORT,
  '0.0.0.0',
  () => console.log(`Server running: ${API_CONFIG.HOST}:${API_CONFIG.PORT}`));
