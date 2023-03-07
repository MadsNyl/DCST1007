import mysql from 'mysql2';
require('dotenv').config();


// Create a pool of connections to the mysql server.
// Read more about connection pools here: https://en.wikipedia.org/wiki/Connection_pool
export const pool = mysql.createPool({
  host: 'mysql-ait.stud.idi.ntnu.no',
  connectionLimit: 1, // Limit the number of simultaneous connections to avoid overloading the mysql server
  user: 'mknylund', // Replace "username" with your mysql-ait.stud.idi.ntnu.no username
  password: process.env.DB_PASSWORD, // Replae "password" with your mysql-ait.stud.idi.ntnu.no password
  database: 'mknylund', // Replace "username" with your mysql-ait.stud.idi.ntnu.no username
});
