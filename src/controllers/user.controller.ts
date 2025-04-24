import { Request, Response } from 'express';
import { handleCreateUser } from '../services/user.service';
const gethomepage = (req, res) => {
    res.render('home', { title: 'Home' });
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