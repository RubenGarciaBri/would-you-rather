import express from 'express'
const router = express.Router()
import { getPolls, addPolls } from '../controllers/pollController.js'

router.route('/').get(getPolls)
router.route('/').post(addPolls)

export default router