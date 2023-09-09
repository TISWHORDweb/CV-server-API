const mongoose = require('mongoose')

const CVWorkSchema=new mongoose.Schema({
    personId:{
        type:String,
    },
    jobTitle:{
        type:String, 
    },
    company:{
        type:String,
    },
    department:{
        type:String, 
    },
    years:{
        type:String,
    },
    notes:{
        type:String, 
    },
    time_created:{type:Number, default:()=>Date.now()},	
    updated_at:{type:Number, default:()=>Date.now()}	
})


const ModelWork=mongoose.model("model-work", CVWorkSchema)

module.exports=ModelWork
