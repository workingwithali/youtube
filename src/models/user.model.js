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
        avatar:{
            type:string, // cloudinary url
            required: true,
        },
        coverimage:{
            type:string, // cloudinary url
        },
        watchHistory:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "video"
            }
        ],
        
    }
)
export const User = mongoose.model('User', UserSchema)