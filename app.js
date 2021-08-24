//const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
//const EventEmitter = require('events'); // because event emitter is a class we write all camel case
// const {
//     emitWarning
// } = require('process');


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


// events
// const emitter = new EventEmitter(); // an object of event emitter class

// //register a listner
// emitter.on('messageLogged', (arg) => {
//     console.log('Listner called', arg);
// });

// //raise an event
// emitter.emit('messageLogged', {
//     id: 1,
//     url: 'url'
// });


// const Logger = require('./logger');
// const logger = new Logger();
// logger.on('messageLogged', (arg) => {
//         console.log('Listner called', arg);
//     });
// logger.log('message');



const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    // if(req.url === '/api/courses'){
    //     res.write(JSON.stringify(arrayofobj));
    //     res.end();
    // }
});
// server.on('connection', (socket) => {
//     console.log('New Connection ...');
// });
server.listen(3000);
console.log('Listening on port 3000 ...');