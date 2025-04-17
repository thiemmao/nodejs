import express,{Express} from 'express';

import { gethomepage } from '../controllers/user.controller';
const router = express.Router();
const wedRouter =(app:Express) => {
router.get('/', gethomepage);
router.get('/wed', (req, res) => {
    res.send('wed');
  })

  app.use('/', router);
}
export default wedRouter;