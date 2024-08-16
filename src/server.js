const express = require('express');
const { api } = require('./config');
const swaggerUi = require('swagger-ui-express');
const specs = require('./utils/swagger');
const { morganMiddleware } = require('./middlewares');
const routes = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const cron = require('node-cron');
const { closeExpiredJobs } = require('./repositories/jobs.repositories');

const app = express();

const corsOption = {
  origin: '*',
  credentials: true
};
app.use(cors(corsOption));
app.use(cookieParser());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(morganMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
cron.schedule('0 0 * * *', closeExpiredJobs, { timeZone: 'Asia/Jakarta' });
app.use(`/${api}`, routes);

module.exports = app;
