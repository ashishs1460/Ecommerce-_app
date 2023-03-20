import mongoose from 'mongoose'
mongoose.set('strictQuery', false)
const connectDb=()=>{
    try {
        const connect=mongoose.connect(process.env.MONGO)
        console.log(`Connected to mongodb database`)        
    } catch (error) {
        console.log(`error in mongodb ${error}`)
    }
}

export default connectDb