const winston = require('winston');
const path = require('path');
const fs = require('fs');

const logDir = 'logs';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  http: 'magenta',
  debug: 'green'
};

winston.addColors(colors);

// const format = winston.format.combine(
//   winston.format.timestamp({
//     format: 'YYYY-MM-DD HH:mm:ss:ms'
//   }),
//   winston.format.colorize({ all: true }),
//   winston.format.printf(
//     (info) => `${info.timestamp} ${info.level}: ${info.message}`
//   )
// );

// const transports = [
//   new winston.transports.Console(),
//   new winston.transports.File({
//     filename: 'logs/error.log',
//     level: 'error'
//   }),
//   new winston.transports.File({
//     filename: 'logs/all.log'
//   })
// ];

if (process.env.NODE_ENV !== 'production') {
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }
}

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    process.env.NODE_ENV !== 'production' &&
      new winston.transports.File({ filename: path.join(logDir, 'app.log') })
  ].filter(Boolean)
});

module.exports = logger;
