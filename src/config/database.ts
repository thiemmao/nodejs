import mysql from 'mysql2/promise';

const getconnection = async () => {
// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejs',
  port: 3306,
  password: '123456',
});
try {
// Test the connection
const [rows, fields] = await connection.execute('SELECT * FROM user');
// Log the result of the query
console.log('Connected to the database!');
console.log('Query result:', rows);
console.log(rows); // Output the result of the query
console.log(fields); // Output the fields of the result
} 
catch (error) {
console.error('Error connecting to the database:', error);
}
}
export default getconnection;