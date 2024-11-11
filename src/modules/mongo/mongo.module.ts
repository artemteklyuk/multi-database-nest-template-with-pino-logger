import { Config } from '@libs/config';
import { Global, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { MongoRepository } from './mongo.repository';

@Global()
@Module({
  imports: [],
  providers: [
    MongoRepository,
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
            database: 'postgresNew',
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
  exports: [DataSource, MongoRepository],
})
export class MongoModule {}
