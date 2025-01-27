import mongoose from "mongoose";
import {DB_Name} from "./constants.js"

import express from "express"
const app = express()

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("error",(error)=>{
            console.log("error",error)
            throw error
        })
        app.listen(process.env.PORT,)

        
    } catch (error) {
        console.error("error",error)
        throw err        
    }
})()