import {useNavigate} from 'react-router-dom' 
import Navbar from './navbar'
import '../style/int.css'
import { useState } from 'react';
import axios from 'axios';

const Login =()=>{
    const islogedin=localStorage.getItem("islogedin");
    const navigate=useNavigate();
    const [name ,setname] =useState('')
    const [email,setemail] =useState('')
    const [mobno,setmobno] =useState()
    const [Designation,setdesg] =useState('')
    const [Gender,setgender] =useState()
    const [Course,setcourse] =useState()
    const [img,setimg] =useState();


    const changeimg =(e)=>{
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload =()=>{
            console.log(reader.result);
            // return reader.result
            setimg(reader.result);
            window.alert('img uploaded succuessfuly')
            // console.log(reader.img)
        };
        reader.onerror =error =>{
            // return null
            setimg('')
        }

    }

    const createemp=()=>{
        const obj ={
            name:name,
            email:email,
            mobileno:mobno,
            designation:Designation,
            gender:Gender,
            course:Course,
            img:img,
            date:new Date()
        }
        // console.log(obj)

        axios({
            method:'POST',
            url:'http://localhost:5402/create',
            headers:{"Content-Type":"Application/json"},
            data:obj
        }
        ).then(result =>navigate('/employe')).catch(error=> console.log(error))

    }

return(
    islogedin ?

    <>
    <Navbar/>
    <div className='pagename' style={{backgroundColor:'yellow'}}><b>Create Employee</b></div>
    <div >
        <div  className='empcreateform'>
            <div className='items'>
                 <label>Name :- </label>
                 <input type='text' value={name} onChange={(e)=>{setname(e.target.value)}} required></input>
            </div>
           <div className='items'>
                <label>Email :- </label>
                <input type='email' value={email}  onChange={(e)=>{setemail(e.target.value)}} required></input>
           </div>
           <div className='items'>
                <label>Mobile Number :- </label>
                <input type='number' value={mobno} onChange={(e)=>{setmobno(e.target.value)}} required></input>
            </div>    

            <div className='items'>
                <label>Designation :- </label>
                <select value={Designation}  onChange={(e)=>{setdesg(e.target.value)}} required>
                    <option value={"HR"}>HR</option>
                    <option value={"Manager"}>Manager</option>
                    <option value={"Sales"}>Sales</option>
                </select>
            </div>
            <div className='items'>
                <label style={{marginRight:'10px'}}>Gender :- </label>
                <label name="male">Male</label><input type='radio' name='gender' value='male'  onChange={(e)=>{setgender(e.target.value)}}></input>
                <label style={{marginLeft:'10px'}}>Female</label><input type='radio' name='gender' value='female' onChange={(e)=>{setgender(e.target.value)}}></input>
            </div>
           <div className='items'>
                 <label style={{marginRight:'10px'}}>Course :- </label>
                <label style={{marginRight:'5px'}}>MCA</label><input type='checkbox' value={"MCA"} style={{marginRight:'10px'}} onChange={(e)=>{setcourse(e.target.value)}}></input>
                <label style={{marginRight:'5px'}}>BCA</label><input type='checkbox' value={"BCA"} style={{marginRight:'10px'}} onChange={(e)=>{setcourse(e.target.value)}}></input>
                <label style={{marginRight:'5px'}}>BSC</label><input type='checkbox' value={"BSC"} style={{marginRight:'10px'}} onChange={(e)=>{setcourse(e.target.value)}}></input>
           </div>
            
            <div className='items'>
            <label style={{marginRight:'10px'}}>Image :- </label>   <input type='file' accept='image/x-png, image/jpeg' onChange={(e)=>{changeimg(e)}}></input>
            </div>
            
            <button className='items' onClick={()=>{createemp()}}>Submit</button>
        </div>
    </div>
    </>

    :
    <div>
    <button onClick={()=>{navigate('/login')}}>Login to Continue</button>
    </div>
)
}

export default Login;