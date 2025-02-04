// require('dotenv').config({path : './env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({ path: './env' })





connectDB()
.then()
.catch((err)=>{
    console.log("Mongo db connection fail !!!!",err)
})

























// import mongoose from "mongoose";
// import {DB_Name} from "./constants.js"

// import express from "express"
// const app = express()

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//         app.on("error",(error)=>{
//             console.log("error",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(   `app is listening on port ${process.env.PORT}`)
//         })

        
//     } catch (error) {
//         console.error("error",error)
//         throw err        
//     }
// })()