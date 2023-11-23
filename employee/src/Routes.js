import {BrowserRouter,Route,Routes} from 'react-router-dom';

//                                                     //
import Login from './Components/int/login';
import Dashboard  from './Components/int/Dashboard';
import Employeelist  from './Components/int/Employeelist';
import Employeeedit  from './Components/int/Employeeedit';
import Home  from './Components/int/Home';








 const Router =()=> {
    return (
        <>
        <BrowserRouter>
        <Routes>
            
            <Route path='/'Component={Login} ></Route>
            <Route path='/login'Component={Login} ></Route>

            <Route path='/dashboard'Component={Dashboard} ></Route>
            <Route path='/employe'Component={Employeelist} ></Route>
            <Route path='/employeedit'Component={Employeeedit} ></Route>
            <Route path='/home'Component={Home} ></Route>

        </Routes>
        </BrowserRouter>
        </>
    )

}
export default  Router;