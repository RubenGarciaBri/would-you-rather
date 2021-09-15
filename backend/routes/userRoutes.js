import express from 'express';
import { getUsers, getUser, addUsers } from '../controllers/userController.js';

const router = express.Router();
router.route('/').get(getUsers);
router.route('/:userId').get(getUser);
router.route('/').post(addUsers);

export default router;
