import { render } from 'ejs';
import { Request, Response } from 'express';
import { handleCreateUser,handleGetUser,handledeleteuser,handleGetUserbyid,handleupdateUser } from 'services/user.service';
const gethomepage =async (req, res) => {
    // get user from database
    const user = await handleGetUser();
    // console.log("sss",user);
    res.render('home',{
        name :user,
        title: 'Home'
    });
}
const getcreateuserpage = (req:Request , res:Response) => {
    return res.render('create-user');
}
const postcreateuserpage = async (req:Request , res:Response) => {

    const { email, description, address } = req.body;
    await handleCreateUser(email, description, address);
    return res.redirect('/');
}
const postdeleteuser = async  (req:Request , res:Response) => {
    // console.log(req.params.id);
    await handledeleteuser(req.params.id);
    return res.redirect('/');
}
const getviewuserpage = async (req:Request , res:Response) => {
    const user = await handleGetUserbyid(req.params.id);
    return res.render('view-user',{
        user:user
    });
}
const postupdateuser = async (req:Request , res:Response) => {
    const { id, email, description, address } = req.body;
    await handleupdateUser(id,description,email,address);
    return res.redirect('/');
}
export { gethomepage,getcreateuserpage,postcreateuserpage,handleCreateUser ,postdeleteuser,getviewuserpage,postupdateuser };
// export { gethomepage, getcreateuserpage };