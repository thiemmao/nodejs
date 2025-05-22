import express,{Express} from 'express';

import { getcreateuserpage, gethomepage,postcreateuserpage,postdeleteuser,getviewuserpage,postupdateuser } from '../controllers/user.controller';
const router = express.Router();
const wedRouter =(app:Express) => {
router.get('/', gethomepage);
router.get('/wed', (req, res) => {
    res.send('wed');
  })
router.get('/create-user',getcreateuserpage);
router.post('/create-user',postcreateuserpage);
router.post('/handle-delete-user/:id',postdeleteuser);
router.get('/handle-view-user/:id',getviewuserpage);
router.post('/update-user',postupdateuser);
  app.use('/', router);
}

export default wedRouter;