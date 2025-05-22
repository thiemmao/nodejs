import e from "express";
import getconnection  from "../config/database";
const handleCreateUser = async (
    email :string,
    description :string,
    address :string) => {
    // const connection = getconnection();
    const connection = await getconnection();
    try {
    const [rows, fields] = await connection.execute(
        'INSERT INTO user (name,email,addresses) VALUES (?, ?, ?)',
        [description, email, address]
    );
    } catch (error) {
    console.error('Error connecting to the database:', error);
    console.log('User created with email:', email);}
    }

const handleGetUser =async () => {
    const connection  = await getconnection();
    try {
        // Test the connection
        const [rows, fields] = await connection.execute('SELECT * FROM user');
        // Log the result of the query
        // console.log('Connected to the database!');
        // console.log('Query result:', rows);
        //console.log(rows); // Output the result of the query
        // console.log(fields); // Output the fields of the result\
        return rows
        }
        catch (error) {
        console.error('Error connecting to the database:', error);
        return error;
        }
}
const handleGetUserbyid =async ( id:string ) => {
    const connection  = await getconnection();
    try {
        // Test the connection
        const [rows, fields] = await connection.execute('SELECT * FROM user where id = ? limit 1',
        [id]);
        return rows
        }
        catch (error) {
        console.error('Error connecting to the database:', error);
        return error;
        }
}
const handledeleteuser = async (
    id: string) => {
    // const connection = getconnection();
    const connection = await getconnection();
    try {
    const [rows, fields] = await connection.execute(
        'delete from user where id = ? limit 1',
        [id]
    );
    } catch (error) {
    console.log('');}
    }

const handleupdateUser = async (
    id: string,
    name:string,
    email: string,
    address: string,
    ) => {
    // const connection = getconnection();
    const connection = await getconnection();
    try {
    const [rows, fields] = await connection.execute(
        'UPDATE user SET name = ?, email = ?, addresses = ? WHERE id = ?',
        [name, email, address, id]
    );
    } catch (error) {
    console.log('');}
    }
export {handleCreateUser, handleGetUser,handledeleteuser,handleGetUserbyid,handleupdateUser};
