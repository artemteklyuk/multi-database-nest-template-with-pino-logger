import { ConfigSchema } from '@libs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const configService = new ConfigSchema();

export const dataSourceOptions = (config:  ConfigSchema): DataSourceOptions => ({
  type: 'postgres',
  url: `postgresql://${config.postgresLogin}:${config.postgresPass}@${config.postgresHost}:${config.postgresPort}/${config.postgresDbName}`,
  synchronize: false,
});

export const options = () => ({
  useFactory: (config: ConfigSchema) => dataSourceOptions(config),
});

export default new DataSource(dataSourceOptions(configService));