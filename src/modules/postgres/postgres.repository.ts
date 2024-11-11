import { Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class PostgresRepository {
  private readonly logger = new Logger(PostgresRepository.name);

  constructor(private dataSource: DataSource) {}
  public async postgresTest() {
    try {
      const res = await this.dataSource.createQueryRunner().query(`
            CREATE TABLE "document" (
            "id" text NOT NULL
            );`);
      return res;
    } catch (error) {
      console.log(error.message);
      this.logger.error(error);
    }
  }
}
