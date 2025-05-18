import e from "express";
import getconnection  from "../config/database";
const handleCreateUser = (
    email :string,
    description :string,
    address :string) => {
    console.log('User created with email:', email);}



const handleGetUser =async () => {
    const connection  = await getconnection();
    try {
        // Test the connection
        const [rows, fields] = await connection.execute('SELECT * FROM user');
        // Log the result of the query
        console.log('Connected to the database!');
        console.log('Query result:', rows);
        console.log(rows); // Output the result of the query
        console.log(fields); // Output the fields of the result\
        return rows
        }
        catch (error) {
        console.error('Error connecting to the database:', error);
        return error;
        }
}
export {handleCreateUser, handleGetUser};
