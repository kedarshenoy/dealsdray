
import {useNavigate} from 'react-router-dom' 

import '../style/int.css'
import { useState } from 'react';
import axios from 'axios';

const Login =()=>{

    const [username, setusername]= useState(['']);
    const [password, setpassword]= useState(['']);

    const navigate = useNavigate(); 
const sublogin =()=>{
// navigate('/dashboard')
// axios.get('http://localhost:5402/login').then(result => console.log(result)).catch(error=>console.log(error))
const obj={
    username:username,
    password:password    

}

axios({
    method:'POST',
    url:'http://localhost:5402/login',
    headers:{"Content-Type":"Application/json"},
    data:obj
}
).then(result=>{
    if(result.data.length ===0){
        window.alert("wrong username or password")
    } else{
        localStorage.setItem("username" ,result.data);
        localStorage.setItem("islogedin" ,true);

        navigate('/dashboard');
        // console.log(result);
    }

}).catch(error=>{
    console.log(error)
})


}
return(
    <>
    <div className='mx-3 my-2'></div>
    <div className='loginNav'><div className='mx-5'>👷‍♂️</div><div>Login Page</div></div>

    <div className=' loginpage '>
        <div className='loginbox'>
            <label className='mx-2' >Username</label>
            <input type='email' value={username} onChange={(event)=>{setusername(event.target.value)}} required></input>
            <br/>
            <label className='my-5 mx-2'>Password</label>
            <input type='password'  value={password} onChange={(event)=>{setpassword(event.target.value)}}></input>
            <br/>
            <button onClick={()=>{sublogin()}}>Login</button>

        </div>
    </div>
    </>
)
}

export default Login;