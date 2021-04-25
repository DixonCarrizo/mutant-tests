import Winston from 'winston';

const IDENTATION = 2;

const printFormat = (options) => {
  const {
    level,
    message,
    label,
    ...data
  } = options;

  const info = Object.keys(data).length > 0 ? JSON.stringify(data, null, IDENTATION) : '';
  if (level === 'debug' || level.includes('debug')) {
    // eslint-disable-next-line no-console
    console.debug(`[${level} ${label.toUpperCase()}]: ------ ${message} ------
    ${info}`);
  }

  return `[${level} ${label.toUpperCase()}]: ------ ${message} -----
  ${info}`;
};

const defaultConfig = (label) => ({
  format: Winston.format.combine(
    Winston.format.colorize(),
    Winston.format.label({ label }),
    Winston.format.printf(printFormat),
  ),
  transports: [
    new Winston.transports.Console(),
  ],
});

export default (filename) => {
  const label = filename.split(/\//).pop().split('.').shift();

  return Winston.loggers.add(label, defaultConfig(label));
};
