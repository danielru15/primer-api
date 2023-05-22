import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { router } from './routes/index'



const PORT =process.env.PORT || 8081
const app=express()
app.use(cors())
app.use(router)
app.listen(PORT, ()=> console.log(`servidor corriendo en http://localhost:${PORT}`))