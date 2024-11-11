import { IsIn, IsNumber, IsString } from 'class-validator';

export class ConfigSchema {
  @IsIn(['production', 'development', 'test'])
  @IsString()
  public readonly NODE_ENV: string;

  @IsString()
  public readonly name!: string;

  @IsNumber()
  public readonly port!: number;

  @IsNumber()
  public readonly mongoPort!: number;

  @IsString()
  public readonly mongoPass!: string;

  @IsString()
  public readonly mongoLogin!: string;

  @IsString()
  public readonly mongoHost!: string;

  @IsString()
  public readonly mongoDbName!: string;

  @IsNumber()
  public readonly postgresPort!: number;

  @IsString()
  public readonly postgresPass!: string;

  @IsString()
  public readonly postgresLogin!: string;

  @IsString()
  public readonly postgresHost!: string;

  @IsString()
  public readonly postgresDbName!: string;
}
