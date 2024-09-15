import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    } ,
    phoneNumber : {
        type : Number,
        required : true
    } , 
    role : {
        type : String,
        enum : ['student' , 'recuiter'],
        required : true
    } ,
    profile : {
        Bio : {type : String},
        skills : [{type : String}],
        resume : {type : String},
        resumeOriginalName : {type : String} ,
        company : {type : mongoose.Schema.Types.ObjectId , ref : 'Company'} ,
        profilePic : {
            type : String,
            default : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
    }
} , {timeStamps : true});

export default mongoose.model("User" , UserSchema)