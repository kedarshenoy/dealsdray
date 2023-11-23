import {useNavigate} from 'react-router-dom' 

import '../style/int.css'
import { useState } from 'react'


const Navbar =()=>{

    // const username = localStorage.getItem('username');
    const [isloged, setloged]= useState(true)

    const logout=()=>{
        localStorage.clear();
        setloged(false)
    }
    
    const navigate=  useNavigate();
    const go=(atr)=>{
        navigate(`/${atr}`)
    }
    return(
        <>
        <div className='mx-5 logo'>👷‍♂️</div>
        <div className="navbars">
            <div className='navlinks'onClick={()=>{go('home')}}>Home</div>
            <div className='navlinks'onClick={()=>{go('employe')}}>Employee List</div>
            <div className='navlinks'onClick={()=>{}}>{localStorage.getItem('username')}</div>
            {
                isloged ? <div className='navlinks'onClick={()=>{logout()}}>Logout</div> : <div className='navlinks'>Login</div>
            }

        </div>
        
        </>

    )
}

export default Navbar;