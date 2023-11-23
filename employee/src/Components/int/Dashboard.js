import {useNavigate} from 'react-router-dom' 
import '../style/int.css'
import Navbar from './navbar'

const Login =()=>{
    const navigate=useNavigate();
    
    const islogedin=localStorage.getItem("islogedin");
return(
    islogedin ?
    <>
    <Navbar/>
    <div className='pagename' style={{backgroundColor:'yellow'}}><b>Dashboard</b></div>

    <div className='loginpage' >
        <h1 style={{border:'2px solid black', padding: '20px',backgroundColor:'rgb(194, 242, 242)'}}> Welcome Admin Panel !</h1>
    </div>
    </>
    :
    <>
    <button onClick={()=>{navigate('/login')}}>Login to Continue</button>
    </>
)
}

export default Login;