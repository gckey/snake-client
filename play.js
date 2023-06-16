/*Destructure 'connect' from the module.exports object of client.js and assigns it to a variable named connect in 'play.js' */

const {connect} = require('./client');

console.log("Connecting ...");
connect();