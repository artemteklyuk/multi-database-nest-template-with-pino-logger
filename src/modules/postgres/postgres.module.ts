import { Config } from '@libs/config';
import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { PostgresRepository } from './postgres.repository';

@Module({
  providers: [
    PostgresRepository,
    {
      provide: DataSource,
      useFactory: async () => {
        try {
          const dataSource = new DataSource({
            type: 'postgres',
            host: Config.postgresHost,
            port: Config.postgresPort,
            username: Config.postgresLogin,
            password: Config.postgresPass,
            database: Config.postgresDbName,
            synchronize: true,
          });
          await dataSource.initialize();
          return dataSource;
        } catch (error) {
          throw error;
        }
      },
    },
  ],
  exports: [DataSource, PostgresRepository],
})
export class PostgresModule {}
