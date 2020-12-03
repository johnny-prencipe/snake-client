let connection;
const stdin = process.stdin;
const handleUserInput = (key) => {
  stdin.on('data', (key) => {
    if (key === '\u0003') process.exit();
    if (key === 'w') connection.write('Move: up')
    if (key === 'a') connection.write('Move: left')
    if (key === 's') connection.write('Move: down')
    if (key === 'd') connection.write('Move: right')
    if (key === 'e') connection.write('Say: eat my shorts')
    if (key === 'q') connection.write('Say: nice try')
    if (key === 'f') connection.write('Say: good game!')
  });
}

const setupInput = function(conn) {
  connection = conn;
  // const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  handleUserInput();

  return stdin;
}

module.exports = { setupInput };