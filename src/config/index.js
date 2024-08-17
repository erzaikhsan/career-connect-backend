const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize({
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  // port: process.env.DB_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});

const port = process.env.PORT_APP || 3000;
const api = process.env.API_PATH || 'api/v1';
const secretKey = process.env.SECRET_KEY;

module.exports = {
  db,
  port,
  api,
  secretKey
};
