let connection; // Stores the active TCP connection object.

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//function that will be registered as a callback handler for the data' event on stdin.
const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  // Bind movement commands to the WASD keys
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }

  // Send canned messages
  if (key === 'z') {
    connection.write('Say: Hello, everyone!');
  }
  if (key === 'x') {
    connection.write('Say: Having a great time!');
  }
  if (key === 'c') {
    connection.write('Say: Let\'s play!');
  }
};

module.exports = { setupInput };