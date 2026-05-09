import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';

type RequestHandler = (request: unknown, response: unknown) => void;

let cachedHandler: RequestHandler | undefined;

async function createHandler() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: true, credentials: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.init();

  return app.getHttpAdapter().getInstance() as RequestHandler;
}

export default async function handler(request: unknown, response: unknown) {
  cachedHandler ??= await createHandler();

  return cachedHandler(request, response);
}
