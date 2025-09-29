import cors from 'cors'
import express, { Application, Request, Response } from 'express'

const app: Application = express()

// Parsers
app.use(cors())
app.use(express.json())

let a

console.log(a)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello JIM!')
})

export default app
