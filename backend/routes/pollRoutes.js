import express from 'express';
import { getPolls, addPolls } from '../controllers/pollController.js';

const router = express.Router();

router.route('/').get(getPolls);
router.route('/').post(addPolls);

export default router;
