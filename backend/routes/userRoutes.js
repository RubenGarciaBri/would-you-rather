import express from 'express'
const router = express.Router()
import { getUsers, getUser, addUsers } from '../controllers/userController.js'

router.route('/').get(getUsers)
router.route('/:userId').get(getUser)
router.route('/').post(addUsers)


export default router