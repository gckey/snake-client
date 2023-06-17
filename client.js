
const net = require('net');
// establish a connection with the game server
const connect = function() {
  //create a connection object
  const conn = net.createConnection({
    host: '172.18.215.250', // IP address of the server
    port: 50541 //port # the server is listening on
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  //'connect' event listner that print a successful conn msg for the player(s)
  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
    //send(write) data via TCP to server
    conn.write('Name: ABD');
    
    // conn.write('Move: up');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 50);

  });

  /* Data event listner, listen to incomming data
  conn.on('data', (data) => {
    console.log('Received data:', data);
  }); */
  
  return conn;
};

module.exports = { connect };