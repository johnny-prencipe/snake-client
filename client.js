const net = require('net');
//establishes connection w/ game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', data => {
    console.log('Message from server: ', data);
  });
  conn.on('connect', () => {
    console.log('Connection established.');
    conn.write('Name: JFP');
    conn.write('Move: up');
  });

  return conn;
}

module.exports = { connect };