import dotenv from 'dotenv'
import mongoose, { ConnectOptions } from 'mongoose'

dotenv.config()

const dbUrl = process.env.MONGODB_URL

if (!dbUrl) {
  throw new Error('No database URL provided')
}
const options: ConnectOptions = {}
mongoose.connect(dbUrl, options)
  .then(() => console.log('Mongodb Connected!'))
