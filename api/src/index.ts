import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import './utils/db' 
import morgan from 'morgan'
import recipeRoutes from './routes/recipeRoutes'

dotenv.config()
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(urlencoded({ extended: false }))
app.use(json())

app.get('/health', (req, res)=>{
    res.send('API service is up and running')
})

app.use('/sero/api', recipeRoutes)

app.use((req, res, next)=>{
  next(Error('Error: incorrect endpoint'))
})

app.use((error:unknown, req: Request , res:Response, next: NextFunction)=>{
  let errorMessage = 'Error: unknown error occurred server-side '
  console.error(error)
  if(error instanceof Error) errorMessage = error.message
  res.status(500).json(errorMessage)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})