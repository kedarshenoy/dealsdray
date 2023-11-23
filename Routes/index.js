const express =require('express');
const Routes = express.Router();



const Login =require("../Controlers/Elogin");
const Emp = require("../Controlers/emp")





Routes.get('/',(req,res)=>{res.send("hello routes working")});



Routes.post('/login',Login.login);
Routes.get('/employee',Emp.getemp)
Routes.post('/create',Emp.createemp);
Routes.delete('/emp/:id',Emp.deleteemp);
Routes.post('/update/:name',Emp.update);


module.exports=Routes;