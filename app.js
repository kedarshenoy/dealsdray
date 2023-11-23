const express =require('express')
const Routes = require('./Routes/index')
const mongoose= require('mongoose')
const app =express();
const port =5402
const bodyParser =require("body-parser")
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  app.use('/',Routes);
  

mongoose.connect(
    
    "mongodb://localhost:27017/employee",

    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
).then(success=>{
    console.log("Connected to mongo DB");
    app.listen(port,()=>{
        console.log(`apps runing on port ${port} `);
    })}
).catch(error =>{

    console.log("Error connecting mongodb")
}
)



