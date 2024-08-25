import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{
    application.listen(process.env.PORT || 8000, ()=>{
        console.log(`MongoDB conncted to ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("MONGO db connection is failed",err);
})

































/* (async()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    } catch (error) {
       console.error("Error:", error);
       throw error; 
    }
})() */