import {useNavigate} from 'react-router-dom' 
import Navbar from './navbar'
import '../style/int.css'
import { useEffect, useState } from 'react';
import axios from 'axios'

const Login =()=>{
    const navigate=useNavigate();
    const islogedin=localStorage.getItem("islogedin");

    const [emp, setemp] =useState([]);
    const [search,setsearch]=useState();

    const edit =(emp)=>{
        navigate('/employeedit');
        localStorage.setItem('employee',JSON.stringify(emp))
        // console.log(emp)
    }

    const deleteemp=(item)=>{
        // console.log(item._id)
        axios.delete(`http://localhost:5402/emp/${item}`).then(result=>{console.log(result) ; window.alert("Employee  deleted")}).catch(error=>{console.log("error deleting")})
    }

   useEffect(()=>{
    axios.get('http://localhost:5402/employee').then(result=>{
        // console.log(result.data)
        setemp(result.data)
    }).catch(error=>{
        console.log(error)
    })
   },[])
   let filtr=[]
   if(search){
     filtr=emp.filter(item =>{
        if(item.name.includes(search)){
            return item
        }return null
    })
    // console.log(filtr)
   }
   else filtr=emp
    return(
        islogedin ?
    <>
    <Navbar/>
    <div className='pagename' style={{backgroundColor:'yellow'}}><div><b> Employee List</b></div> <div><span className='mx-5'>Total Count : {emp.length}</span><span onClick={()=>{navigate('/home')}} style={{cursor:'pointer'}}>Create Employee </span> </div> </div>
    <div style={{display:'flex',justifyContent:'end'}}><input type='text' placeholder='🔍  Search' style={{width:'25vw'}} value={search} onChange={(e)=>{setsearch(e.target.value)}}></input></div>
    <table style={{width:'100%'}}>
        
            <tr style={{border:'2px solid black'}}>
                <th style={{border:'2px solid black', padding:'5px' }}>Unique Id</th>
                <th style={{border:'2px solid black', padding:'5px' }}>Image</th>
                <th style={{border:'2px solid black', padding:'5px' }}>Name</th>
                <th style={{border:'2px solid black', padding:'5px' }}>Email</th>
                <th style={{border:'2px solid black', padding:'5px' }}>Mobile No</th>
                <th style={{border:'2px solid black', padding:'5px' }}>Designation</th>
                <th style={{border:'2px solid black', padding:'5px' }}>Gender</th>
                <th style={{border:'2px solid black', padding:'5px' }}>Course</th>
                <th style={{border:'2px solid black', padding:'5px' }}>Create date</th>
                <th style={{border:'2px solid black', padding:'5px' }}>Actions</th>

            </tr>
       
        
                {
                    filtr.map((item,index)=>{
                        return <tr key={index}>
                        <td style={{border:'2px solid black', padding:'5px' }}>{item._id}</td>
                        <td style={{border:'2px solid black', padding:'5px' }}><img src={item.img} alt=':(' style={{height:'50px',width:'50px'}}></img></td>
                        <td style={{border:'2px solid black', padding:'5px' }}>{item.name}</td>
                        <td style={{border:'2px solid black', padding:'5px' }}>{item.email}</td>
                        <td style={{border:'2px solid black', padding:'5px' }}>{item.mobileno}</td>
                        <td style={{border:'2px solid black', padding:'5px' }}>{item.designation}</td>
                        <td style={{border:'2px solid black', padding:'5px' }}>{item.gender}</td>
                        <td style={{border:'2px solid black', padding:'5px' }}>{item.course}</td>
                        <td style={{border:'2px solid black', padding:'5px' }}>{item.date}</td>
                        <td style={{border:'2px solid black', padding:'5px' }}><span><button className='mx-2' onClick={()=>edit(item)}> Edit</button><button onClick={()=>deleteemp(item.name)}>Delete</button></span></td>
                        </tr>
                    })
                }
                
        
    </table>
    </>
    :
    <div>
    <button onClick={()=>{navigate('/login')}}>Login to Continue</button>
    </div>
)
}

export default Login;