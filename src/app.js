import cookieParser from "cookie-parser";
import express from "express";





const app = express()
const corsOptions = {
    origin: process.env.CORS_ORIGIN, // Allow only this origin
    methods: 'GET,POST',           // Allow only GET and POST methods
    allowedHeaders: 'Content-Type,Authorization' // Allow only specific headers
};
app.use(cors(corsOptions))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())




export {app}