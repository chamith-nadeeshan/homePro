import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        
    },
    lastName:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    contactNumber:{
        type:String,
        
    },
    address:{
        type:String,
        
    },
    district:{
        type:String,
        
    },
    password:{
        type:String,
        
    }
    
});

const Users = mongoose.model('Users', UserSchema);

export default Users;