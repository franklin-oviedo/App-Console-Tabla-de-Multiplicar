const colors = require('colors')
const { multiplicaTabla } = require('./helpers/multiplica');
const {argv} = require('./config/yargs')


multiplicaTabla(argv.b, argv.l, argv.h).then(resultTabla => console.log(resultTabla.bgGreen)).catch(err => console.log(err.red))