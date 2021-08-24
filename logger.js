const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        //send a http request
        console.log(message);

        this.emit('messageLogged', {
            id: 1,
            url: 'url'
        });
    }
}


//module.exports.log = log; // 1
//module.exports = log; // 2
module.exports = Logger;