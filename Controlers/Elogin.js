
const Elogin =require('../Models/Elogin')

exports.login=(req,res)=>{
    const {username, password}=req.body;
    Elogin.find(
       { username:username,
        password:password
    }
    ).then(
        result =>{
         
                if(result.length!=0){
                    res.send(result[0].firstname)
                }else res.send([])
            
        }
    ).catch(error=>{
        res.send(error)
    })
}