import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ChatModule } from './chat/chat.module';

async function bootstrap() {
  const app = await NestFactory.create(ChatModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8080);
}
bootstrap();
