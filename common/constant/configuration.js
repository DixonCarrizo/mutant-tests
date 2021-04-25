import Environments from './environment';

const {
  DB_CLIENT,
  DB_HOST,
  DB_MIGRATION_TABLE,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  DEFAULT_DB_MAX_POOL,
  DEFAULT_DB_MIN_POOL,
} = Environments;

export default ({
  databaseConfig: {
    client: DB_CLIENT,
    connection: {
      user: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      host: DB_HOST,
      port: DB_PORT,
    },
    pool: {
      min: DEFAULT_DB_MIN_POOL,
      max: DEFAULT_DB_MAX_POOL,
    },
    migrations: {
      directory: ['./schema/migrations'],
      tableName: DB_MIGRATION_TABLE,
    },
  },
});
