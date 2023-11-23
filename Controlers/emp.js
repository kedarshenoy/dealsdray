const emp =require('../Models/Emp');

exports.getemp=(req,res)=>{
emp.find().then(result=> res.send(result)).catch(error=>res.res(error))
}

exports.createemp=(req,res)=>{
    const obj =req.body;
    const newemp = new emp(obj);

    newemp.save().then(result => res.send(result)).catch(error=>res.send(error))
}

exports.deleteemp =(req,res)=>{
    const name=req.params.id;
    emp.findOneAndDelete({name:name}).then(result=>res.send(result)).catch(error=>{console.log(error)})
    // emp.find({name:name}).then(result =>{res.send(result)}).catch(error =>{ res.send(error)})
    // console.log(name)

}

exports.update=(req,res)=>{

    const name= req.params.name;
    const obj =req.body
    const newemp = new emp(obj);
    // emp.findOneAndDelete({name:name}).then(result =>{res.send(result)} ).catch(error =>{ res.send(error)})
    // newemp.save().then(result =>{res.send(result)}).catch(error =>{ res.send(error)})
    // emp.find({name:name}).then(result );
}