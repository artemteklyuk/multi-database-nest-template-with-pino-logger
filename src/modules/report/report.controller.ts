import { MongoRepository } from '@modules/mongo/mongo.repository';
import { PostgresRepository } from '@modules/postgres/postgres.repository';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class ReportController {
  constructor(
    private readonly postgresRepository: PostgresRepository,
    private readonly mongoRepository: MongoRepository,
  ) {}

  @Get('test')
  public test() {
    return this.postgresRepository.postgresTest();
  }
  @Get('test-mongo')
  public testMongo() {
    return this.mongoRepository.mongoTest();
  }
}
