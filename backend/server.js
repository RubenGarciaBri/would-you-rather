import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import pollRoutes from './routes/pollRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

dotenv.config()

app.use('/api/polls', pollRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))

