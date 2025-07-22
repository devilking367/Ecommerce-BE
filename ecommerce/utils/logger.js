// src/utils/logger.js
const { createLogger, transports } = require('winston');
const loggerConfig = require('../config/logger.config');

const logger = createLogger({
  level: loggerConfig.level,
  format: loggerConfig.format,
  transports: loggerConfig.transports,
});

// Log ra console nếu không ở production
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: loggerConfig.consoleFormat,
    })
  );
}

module.exports = logger;
