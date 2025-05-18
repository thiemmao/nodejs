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
return connection
}
export default getconnection;