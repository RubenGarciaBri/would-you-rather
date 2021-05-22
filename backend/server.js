import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import pollRoutes from './routes/pollRoutes.js'
import userRoutes from './routes/userRoutes.js'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

dotenv.config()

app.use('/api/polls', pollRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('frontend/build'));

  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

