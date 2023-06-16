
const net = require("net");
// establish a connection with the game server
const connect = function() {
  //create a connection object
  const conn = net.createConnection({
    host: '172.18.215.250', // IP address of the server
    port: 50541 //port # the server is listening on
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //handle connection events
  conn.on('connect', () => {
    console.log('Connection established.');
  });

  conn.on('data', (data) => {
    console.log('Received data:', data);
  });

  return conn;
};

module.exports = { connect };