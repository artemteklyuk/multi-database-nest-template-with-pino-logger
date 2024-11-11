import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { dataSourceOptions, options } from '@libs/database/postgres.config';
import { DataSource } from 'typeorm';
import { ConfigSchema } from '@libs/config';

@Injectable()
export class ReportService {
  // constructor(
  //   @InjectDataSource(new DataSource(dataSourceOptions(new ConfigSchema())))
  //   private readonly dataSourse: DataSource,
  // ) {}
  // public test = () => {
  //   return this.dataSourse
  //     .createQueryRunner()
  //     .query(`SELECT * FROM admin_settings`);
  // };
}
