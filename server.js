console.log('starting server');
process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log('Global Error',err);
})
var k=require('./server/kiwi');
