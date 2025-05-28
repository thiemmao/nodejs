import { Request, Response } from 'express';
const getdashboardpage =async (req, res) => {
   return res.render('admin/dashboard.ejs')
} 
export { getdashboardpage };