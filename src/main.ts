import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { ExceptionsFilter } from './common/filters/exception.ifilter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({origin: "*"});
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new ExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
