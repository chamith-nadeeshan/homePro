import mongoose from "mongoose";

const WorkerSchema = new mongoose.Schema({
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
    service:{
        type:String,
        
    },
    password:{
        type:String,
        
    }
    
});

const Workers = mongoose.model('Workers', WorkerSchema);

export default Workers;