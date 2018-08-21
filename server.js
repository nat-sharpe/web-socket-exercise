const WebSocket = require('ws');

let ws = new WebSocket.Server({ port: 3001 });

let allClients = [];

ws.on('connection', client => {
    console.log('Hey there! Someone connected');
    client.on('message', message => {
        console.log(message);
        ws.clients.forEach(connection => {
            if (connection !== client) {
                connection.send('Client said: "' + message + '"');
            }
        });
    });
});

