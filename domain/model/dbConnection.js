import knex from 'knex';

import { Helper, Constant } from '../../common';

const { Log } = Helper;
const { Env, Config } = Constant;
const logger = Log(__filename);

const { databaseConfig } = Config;
const { QUERY_LOGS } = Env;

const db = knex(databaseConfig);

if (QUERY_LOGS === 'true') {
  db.on('query', (queryData) => {
    logger.debug('QUERY EXECUTED', {
      query: queryData.sql,
      bindings: queryData.bindings,
    });
  });
}

export default db;
