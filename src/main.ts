import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT', 3002);

  app.enableCors({
    origin: 'http://localhost:3000', // or true to allow all origins (dev only)
    credentials: true, // if you're using cookies or need auth headers
  });

  await app.listen(port);
  console.log(`Application is running on http://localhost:${port}`);
}
bootstrap();
