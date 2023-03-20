import express from 'express'
import dotenv from 'dotenv'
import mogran from 'morgan'
import connectDb from './config/db.js'
import authRoute from './routes/authRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import productRoute from './routes/productRoute.js'
import cros from 'cors'
import path from 'path'


//config env
dotenv.config()

//databaseconfig
connectDb()

const app=express()

//middlewares
app.use(cros())
app.use(express.json())
app.use(mogran('dev'))
app.use(express.static(path.join(__dirname,'./client/build')))

//routes

app.use('/api/v1/auth',authRoute)
app.use('/api/v1/category',categoryRoute)
app.use('/api/v1/product',productRoute)

app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,'./client/build/index.html'))
})


//port
const PORT=process.env.PORT||8080

//run listen
app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${process.env.PORT} `)
})