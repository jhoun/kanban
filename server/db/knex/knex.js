const environment = process.env.ENVIRONMENT || 'development'
console.log('environmentKNEX', environment);
const config = require('../../knexfile.js')[environment];
module.exports = require('knex')(config);