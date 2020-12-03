const net = require('net');
//establishes connection w/ game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

console.log('connecting...');
connect();