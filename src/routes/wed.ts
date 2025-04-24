import express,{Express} from 'express';

import { getcreateuserpage, gethomepage,postcreateuserpage } from '../controllers/user.controller';
const router = express.Router();
const wedRouter =(app:Express) => {
router.get('/', gethomepage);
router.get('/wed', (req, res) => {
    res.send('wed');
  })
router.get('/create-user',getcreateuserpage);
router.post('/create-user',postcreateuserpage);
  app.use('/', router);
}

export default wedRouter;