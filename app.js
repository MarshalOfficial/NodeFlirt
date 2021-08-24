const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events'); // because event emitter is a class we write all camel case


//logger.log('asdadasdasd'); // 1
//logger('asdadasdasd'); // 2

// path module
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// OS module
// var totlemem = os.totalmem();
// var freemem = os.freemem();
// console.log('Total Memory: ' + totlemem);
// console.log(`Free Memory: ${freemem}`);

// file system module
//1
//const files = fs.readdirSync('./'); //sync not recommended
//console.log(files);
//2
// fs.readdir('./', function (err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });


const emitter = new EventEmitter(); // an object of event emitter class
//raise an event
emitter.emit('messageLogged');