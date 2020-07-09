const search = require('./emagi-search');
const convert = require('./emagify');
const random = require('./emagi-random');


//arguments 
const arguments = process.argv.slice(2)
//if they passed in string arguments then they execute the command associated
if(arguments[0] === 'convert'){
    console.log(convert(arguments.slice(1)))
}
// console.log(arguments)