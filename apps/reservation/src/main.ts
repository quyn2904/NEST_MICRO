import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { ReservationModule } from './reservation.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ReservationModule);
  // console.log('Starting reservation service');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.useLogger(app.get(Logger));
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
