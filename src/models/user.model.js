import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema(
    {
        username:{
            type:string,
            required:true,
            lowercase:true,
            unique: true,
            trime:true,
            index:true,
        },
        email:{
            type:string,
            required:true,
            lowercase:true,
            unique: true,
            trime:true,
        },
        fullname:{
            type:string,
            required:true,
            trime:true,
            index:true,
        },
    }
)
export const User = mongoose.model('User', UserSchema)