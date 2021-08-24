var url = 'http://mylogger.io/log';

function log(message){
    //send a http request
    console.log(message);
}

//module.exports.log = log; // 1
module.exports = log; // 2
