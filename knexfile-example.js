// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'YOUR_USERNAME',
      password: 'YOUR_PASSWORD',
      database: 'YOUR_DATABASE_NAME',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/db/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/db/knex/seeds'
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
