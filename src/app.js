import express from "express";





const app = express()
const corsOptions = {
    origin: process.env.CORS_ORIGIN, // Allow only this origin
    methods: 'GET,POST',           // Allow only GET and POST methods
    allowedHeaders: 'Content-Type,Authorization' // Allow only specific headers
};
app.use(cors())



export {app}