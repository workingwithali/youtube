import mongoose , {Schema} from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const VideoSchema = new Schema(
    {
        videoFile:{
            type: String,
            required: true
        },
        thumnail:{
            type: String,
            required:true
        },
        title:{
            type: String,
            required:true
        },
        description:{
            type: String,
            required: true
        },
        duration:{
            type: Number,
            required:true 
        },
        view:{
            type: Number,
            default: 0
        },
        isPublished:{
            type : Boolean,
            default: true
        },
        owner:{
            type: mongoose.Schema.ObjectId,
            ref : "User"
        }
    },
    {
        timestamps:true
    }
)
VideoSchema.plugin(mongooseAggregatePaginate)
 export const Video = mongoose.model('Video',VideoSchema)