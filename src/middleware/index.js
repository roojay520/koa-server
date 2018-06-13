import path from 'path';
import staticFile from 'koa-static';

export default (app) => {
  app.use(staticFile(path.join(__dirname, '../../public')));
};

