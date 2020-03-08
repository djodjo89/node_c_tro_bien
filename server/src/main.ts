import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port: number = parseInt(process.env.PORT) || 8000;

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  // webpack hmr
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  Logger.log(`🚀Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
