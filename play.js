const { connect } = require('./client');
console.log('connecting...');
const stdin = process.stdin;
const handleUserInput = (key) => {
  stdin.on('data', (key) => {
    if (key === '\u0003') process.exit();
    if (key === 'w') conn.write('Move: up')
    if (key === 'a') conn.write('Move: left')
    if (key === 's') conn.write('Move: down')
    if (key === 'd') conn.write('Move: right')
  });
}

const setupInput = function() {
  // const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  handleUserInput();

  return stdin;
}



connect();
setupInput();
handleUserInput();