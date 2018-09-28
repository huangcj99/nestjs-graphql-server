const hbs = require('hbs');
const dateFormat = require('../../components/hbs-helper/date-format.js');

hbs.registerHelper('dateFormat', dateFormat);

module.exports = hbs;