const ServerlessHttp = require('serverless-http');
const app = require('./app');

const handler = ServerlessHttp(app);

module.exports = { handler };
