import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Link from './Pages/Link';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cards from './Components/Cards';
import CardsDetails from './Components/CardsDetails';
// import New1 from './Components/New1';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CartComponent from './Components/CartComponent';
import SirForms from './Components/SirForms';
// import ReduxCounter from './Components/ReduxCounter';
function App() {
  return (
   <div>
   <Navbar/>
   {/* <New1/> */}
   {/* <ReduxCounter/> */}
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/link' element={<Link/>}></Route>
    <Route path='/Card' element={<Cards/>}></Route>
    <Route path="/Card/:id" element={<CardsDetails/>}></Route>
    <Route path='/Login' element={  <Login/>}></Route>
    <Route path='/Signup' element={  <Signup/>}></Route>
    <Route path='/cart' element={ <CartComponent/>}></Route>
    <Route path='/Sirforms' element={ <SirForms/>}></Route>
    </Routes>
    {/* //<New1/> */}
  
   </div>
  );
}
export default App;
