const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'nano',
  password: '1598',
  database: 'my_store'
});

module.exports = pool;

