export * from './database.config';
export * from './config.schema';
import { DatabaseConfig } from './database.config';

export default function configuration() {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    [DatabaseConfig.name]: DatabaseConfig,
  };
}
