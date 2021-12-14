const knex = require('kenx');
const configuration = require('../../kenxfile');

const connection = knex(configuration.development);

module.exports  = connections;