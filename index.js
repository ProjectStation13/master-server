var master = require('master-server')

var server = new master.Server({ 
    ip: '127.0.0.1', // in production use the external ip!
    httpPort: 8080, 
    tcpPort: 3333
})
server.start()