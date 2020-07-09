const search = require('./emagi-search');
const convert = require('./emagify');
const random = require('./emagi-random');
const symbols = require('./emagi-symbols');


//if they passed in string arguments then they execute the command associated
const arguments = process.argv.slice(2)
//to convert the string to an emoji
if(arguments[0] === 'convert'){
    console.log(convert(arguments.slice(1)/*.join(" ")*/))
}
// console.log(arguments)
//to search the whole words array for the letters given
else if(arguments[0] === 'search'){
console.log(search(arguments.slice(1)))
}
//this one should select a random emoji, but since it's not given any arguments 
else if(arguments[0] === 'random'){
    console.log(random(symbols))
}

//error message when not given an argument 
// let notRandom = arguments[0] !== 'random';
// let notSearch = arguments[0] !== 'search';
// let notConvert = arguments[0] !== 'convert';
else{
// notRandom||notSearch || notConvert
    console.log("Please input one of the following : Random ,Search, or Convert before continuing")

}
