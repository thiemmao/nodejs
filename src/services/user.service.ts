import e from "express";

const handleCreateUser = (
    email :string,
    description :string,
    address :string) => {
    console.log('User created with email:', email);}
export {handleCreateUser}