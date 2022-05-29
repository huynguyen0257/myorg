import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export type DatabaseConfigType = {
  name: 'database',
  host: string;
  port: number;
};

export const DatabaseConfig: DatabaseConfigType = Object.freeze({
  name: 'database',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
});

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get getConfig(): DatabaseConfigType {
    return this.configService.get(DatabaseConfig.name);
  }
}
