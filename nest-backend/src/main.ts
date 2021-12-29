import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('Server Ready!'); // Log this message in order to display to correct server state
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3000); // Use port from environment variable or 3000 to guarantee that the app is always running
}

bootstrap();
