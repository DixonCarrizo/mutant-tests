const {
  PORT,
  QUERY_LOGS,
  DB_CLIENT,
  DB_HOST,
  DB_MIGRATION_TABLE,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  DEFAULT_DB_MAX_POOL,
  DEFAULT_DB_MIN_POOL,
} = process.env;

export default {
  PORT,
  QUERY_LOGS,
  DB_CLIENT,
  DB_HOST,
  DB_MIGRATION_TABLE,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  DEFAULT_DB_MAX_POOL: parseInt(DEFAULT_DB_MAX_POOL, 10),
  DEFAULT_DB_MIN_POOL: parseInt(DEFAULT_DB_MIN_POOL, 10),
};
