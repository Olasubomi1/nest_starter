// import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// import { db_host, db_port, db_name, db_user, db_password } from './dbconfig';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true, // make sure this isn't true in production
};

/*
const config: PostgresConnectionOptions = {
  type: 'postgres',
  port: db_port,
  database: db_name,
  host: db_host,
  username: db_user,
  password: db_password,
};
*/

export default config;
