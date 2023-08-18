import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    abortOnError: false,
  });
  await app.listen(port);
  console.log('\n\x1b[32m%s\x1b[0m', 'Development');
  console.log(`API is running on: http://localhost:${port}`);
  // console.log(`Swagger is running on: http://localhost:${port}/api`);
}
bootstrap();
