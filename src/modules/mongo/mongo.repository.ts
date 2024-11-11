import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class MongoRepository {
  constructor(private dataSource: DataSource) {}

  public mongoTest() {
    return this.dataSource.createQueryRunner().query(`
            CREATE TABLE "document" (
            "id" text NOT NULL
            );`);
  }
}
