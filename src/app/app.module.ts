import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { pinoDefaultConfig } from '@libs/logger';
import { ReportModule } from '@modules/report/report.module';
import { PostgresModule } from 'src/modules/postgres/postgres.module';
import { ConfigModule } from '@libs/config';

@Module({
  imports: [
    ConfigModule,
    ReportModule,
    LoggerModule.forRootAsync(pinoDefaultConfig),
    // MongoModule,
    PostgresModule,
  ]
})
export class AppModule {}
