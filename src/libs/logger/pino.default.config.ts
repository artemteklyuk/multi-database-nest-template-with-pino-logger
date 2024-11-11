import { ConfigSchema } from '@libs/config';

export const pinoDefaultConfig = {
  inject: [ConfigSchema],
  useFactory: (config: ConfigSchema) => ({
    pinoHttp: {
      transport: {
        targets: [
          {
            target: 'pino-pretty',
            options: {
              singleLine: true,
              colorize: true,
            },
          },
        ],
      },
      base: { application: config.name },
    },
  }),
};
