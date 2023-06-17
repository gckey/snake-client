const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

const conn = connect();
setupInput(conn); //pass the connection obj returned from connect()