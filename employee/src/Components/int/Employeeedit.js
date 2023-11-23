import {useNavigate} from 'react-router-dom' 
import Navbar from './navbar'
import { useEffect, useState } from 'react';
import axios from 'axios'
const Login =()=>{
    const islogedin=localStorage.getItem("islogedin");
    const navigate=useNavigate();
    const [emp ,setemp]=useState([])
    const [files ,setfile]=useState('none')

    const [name ,setname] =useState('')
    const [email,setemail] =useState('')
    const [mobno,setmobno] =useState()
    const [Designation,setdesg] =useState('')
    const [Gender,setgender] =useState()
    const [Course,setcourse] =useState()
    const [img,setimg] =useState();

    const update =(name)=>{
        const obj=emp;
        axios(
            {
                method:'POST',
                url:`http://localhost:5402/update/${name}`,
                headers:{"Content-Type":"Application/json"},
                data:obj
            }
        )
        .then(result =>{
            console.log(result)
            
        }).catch(error =>{
            console.log(error)
        })
        navigate('/employe');
    }

    useEffect(()=>{
        let employee=localStorage.getItem('employee');
    employee= JSON.parse(employee);
    setemp(employee)

    setname(employee.name)
    setemail(employee.email)
    setimg(employee)
    setcourse(employee.course)
    setgender(employee.gender)
    setdesg(employee.designation)
    setmobno(employee.mobileno)
    // console.log(employee);
    },[])

return(
    islogedin ? <>
    <Navbar/>


    <div className='pagename' style={{backgroundColor:'yellow'}}><b>Employee edit</b></div>
    <div >
        <div  className='empcreateform'>
            <div className='items'>
                 <label>Name :- </label>
                 <input type='text' value={name} onChange={(e)=>{setname(e.target.value) }} ></input>
            </div>
           <div className='items'>
                <label>Email :- </label>
                <input type='email' value={email} onChange={(e)=>{setemail(e.target.value) }}></input>
           </div>
           <div className='items'>
                <label>Mobile Number :- </label> 
                <input type='number' value={mobno} onChange={(e)=>{setmobno(e.target.value) }}></input>
            </div>    

            <div className='items'>
                <label>Designation :- </label>
                <select value={Designation} onChange={(e)=>{setcourse(e.target.value) }}>
                    <option>HR</option>
                    <option>Manager</option>
                    <option>Sales</option>
                </select>
            </div>
            <div className='items'>
                <label style={{marginRight:'10px'}}>Gender :- </label>
                <label name="male">Male</label><input type='radio'checked={Gender==="male"} name='gender' value='male' onChange={(e)=>{setgender(e.target.value) }} ></input>
                <label style={{marginLeft:'10px'}}>Female</label><input type='radio' name='gender' value='female' checked={Gender==="Female"} onChange={(e)=>{setgender(e.target.value) }}></input>
            </div>
           <div className='items'>
                 <label style={{marginRight:'10px'}}>Course :- </label>
                <label style={{marginRight:'5px'}} >MCA</label><input type='checkbox' checked={Course==="MCA"} value={"MCA"} style={{marginRight:'10px'}} onChange={(e)=>{setcourse(e.target.value) }}></input>
                <label style={{marginRight:'5px'}} >BCA</label><input type='checkbox' checked={Course === "BCA"} value={"BCA"} style={{marginRight:'10px'}} onChange={(e)=>{setcourse(e.target.value) }}></input>
                <label style={{marginRight:'5px'}} >BSC</label><input type='checkbox' checked={Course === "BSC"} value={"BSC"} style={{marginRight:'10px'}} onChange={(e)=>{setcourse(e.target.value) }}></input>
           </div>
            
            <div className='items'>
            <label style={{marginRight:'10px'}}>Image :- </label> <img src={img} alt=':(' style={{height:'50px',width:'50px'}}></img> <button onClick={()=>{setfile(true)}}>Change Photo</button>
            <input type='file' id='filebtn' style={{display:files}}  accept='image/x-png, image/jpeg' onChange={(e)=>{}} ></input>
            </div>
            
            <button className='items' onClick={()=>{update(name)}}>Update</button>
        </div>
    </div>
    {
        // console.log(emp.name)
    }
    </>

:
<div>
<button onClick={()=>{navigate('/login')}}>Login to Continue</button>
</div>
)
}

export default Login;