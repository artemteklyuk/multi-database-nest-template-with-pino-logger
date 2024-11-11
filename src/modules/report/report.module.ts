import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { PostgresModule } from '@modules/postgres/postgres.module';
import { PostgresRepository } from '@modules/postgres/postgres.repository';
import { MongoModule } from '@modules/mongo/mongo.module';

@Module({
  imports: [PostgresModule, MongoModule],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
