import { Request, Response } from 'express';
import { handleCreateUser,handleGetUser } from '../services/user.service';
const gethomepage =async (req, res) => {
    // get user from database
    const user = await handleGetUser();
    console.log("sss",user);
    res.render('home',{
        name :"user",
        title: 'Home'
    });
}
const getcreateuserpage = (req:Request , res:Response) => {
    return res.render('create-user');
}
const postcreateuserpage = (req:Request , res:Response) => {

    const { email, description, address } = req.body;
    handleCreateUser(email, description, address);
    return res.redirect('/');
}
export { gethomepage,getcreateuserpage,postcreateuserpage,handleCreateUser };
// export { gethomepage, getcreateuserpage };