import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../Components/Carousel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Counter from '../Components/Counter';
// import User from '../Components/User';
import DivSec from '../Components/DivSec';
import Homecards from '../Components/Homecards';
import DivSec2 from '../Components/DivSec2';
import HomeWatches from '../Components/HomeWatches';
import ImgSec from '../Components/ImgSec';
const Home = () => {
  return (
   <>
   <Carousel/>
   {/* <Counter/> */}
   <DivSec/>
   {/* <User/> */}
   {<Homecards/>}
   <DivSec2/>
   <HomeWatches/>
   <ImgSec/>
   <ToastContainer/>
   </>
  )
}

export default Home