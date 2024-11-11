import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { Logger as PinoLogger } from 'nestjs-pino';
import { ConfigSchema } from '@libs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger:
      process.env.NODE_ENV === 'production'
        ? ['error', 'warn', 'log']
        : ['error', 'warn', 'log', 'debug'],
    bufferLogs: true,
  });

  app.useLogger(app.get(PinoLogger));

  const logger = new Logger('Bootstrap');

  const config = app.get(ConfigSchema);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.listen(config.port);

  logger.log(`${config.name} is ready on port ${config.port}`);
}

bootstrap();
