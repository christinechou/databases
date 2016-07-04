var mysql = require('mysql');  

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//Uses npm module to connect to the database server running on your computer

var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});

con.connect();

module.exports = {
  con: con
}
