const path = require('path');
const staticFile = require('koa-static');

module.exports = (app) => {
  app.use(staticFile(path.join(__dirname, '../../public')));
};
