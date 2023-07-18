/**
 * Error handler for api routes
 */
const PrettyError = require('pretty-error');

const isDev = process.env.NODE_ENV !== 'production';
// eslint-disable-next-line no-unused-vars
module.exports = function errorLogger(err, req, res, next) {
  if (isDev && err) {
    const pe = new PrettyError();
    pe.skipNodeFiles();
    pe.skipPackage('express');
    // eslint-disable-next-line no-console
    console.log(pe.render(err));
  }
  return next(err);
};
