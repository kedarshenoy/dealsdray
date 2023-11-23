const mongoose=require('mongoose');

const Scheema =mongoose.Schema;

const Emp = new Scheema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        mobileno:{
            type:String,
            require:true
        },
        designation:{
            type:String,
            require:true
        },
        gender:{
            type:String,
            require:true
        },
        course:{
            type:String,
            require:true
        },
        img:{
            type:String,
            require:true
        },
        date:{
            type:Date,
            require:true
        },
    }
)


module.exports =mongoose.model("emp",Emp,'emp');