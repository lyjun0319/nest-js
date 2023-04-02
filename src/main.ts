import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 정의되지 않은 속성이 요청 데이터에서 검증될 때 제거됩니다
      forbidNonWhitelisted: true,
      transform :true,
    })
  )
  await app.listen(3000);
}
bootstrap();
