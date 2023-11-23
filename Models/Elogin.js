const mongoose = require ('mongoose');

const Scheema =mongoose.Schema;

const Elogin =new Scheema(
    {
        username:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        firstname:{
            type:String,
            require:true
        }, secondname:{
            type:String,
            require:true
        },
    }
)

module.exports=mongoose.model("Elogin",Elogin,'admin');