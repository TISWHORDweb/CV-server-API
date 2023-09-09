const mongoose = require('mongoose')

const CVEducationSchema=new mongoose.Schema({
    personId:{
        type:String, 
    },
    years:{
        type:String,  
    },
    school: {
        type: String,
    },
    faculty:{
        type:String,
    },
    department:{
        type:String, 
    },
    grade:{
        type:String,  
    },
    notes: {
        type: String,
    },
    time_created:{type:Number, default:()=>Date.now()},	
    updated_at:{type:Number, default:()=>Date.now()}	
})


const ModelEducation=mongoose.model("model-education", CVEducationSchema)

module.exports=ModelEducation