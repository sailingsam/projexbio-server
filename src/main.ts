import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { PrismaExceptionFilter } from './common/filters/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Register global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties that don't have decorators
      forbidNonWhitelisted: true, // Throw error for non-whitelisted properties
      transform: true, // Transform payloads to DTO instances
    }),
  );

  // Register global exception filters
  app.useGlobalFilters(new PrismaExceptionFilter());

  const port = configService.get<number>('PORT', 3002);

  app.enableCors({
    origin: 'http://localhost:3000', // or true to allow all origins (dev only)
    credentials: true, // if you're using cookies or need auth headers
  });

  await app.listen(port);
  console.log(`Application is running on http://localhost:${port}`);
}
bootstrap();
