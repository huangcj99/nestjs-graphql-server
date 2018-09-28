import { resolve } from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// moddleware
const hbs = require('./middleware/handlebars');

async function bootstrap() {
  // create nest app
  const app = await NestFactory.create(AppModule);

  // handlebars engine
  // 设置静态资源读取目录(包括html文件，所以get的路由有html则走静态资源读取)
  app.useStaticAssets(resolve(process.cwd(), 'public'));
  // 设置模板目录
  app.setBaseViewsDir(resolve(process.cwd(), 'public'));
  // 渲染尾缀为html的文件
  app.engine('html', hbs.__express);

  // listen the port
  await app.listen(3000);
}

bootstrap();
