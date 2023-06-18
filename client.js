const net = require('net');
const { IP, PORT } = require("./constants");

// establish a connection with the game server
const connect = function() {
  //create a connection object
  const conn = net.createConnection({
    host: IP, // IP address of the server
    port: PORT //port # the server is listening on
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  //'connect' event listner that print a successful conn msg for the player(s)
  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
    //send(write) data via TCP to server
    conn.write('Name: ABD');
  });
  
  return conn;
};

module.exports = { connect };