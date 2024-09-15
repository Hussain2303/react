import React from 'react'
import { NavLink } from 'react-router-dom'
const DivSec = () => {
  return (
        <div className="d-flex container justify-between mx-auto m-10 bg-white border-1 border-solid border-black rounded-lg">
        <h3 className='font-bold m-1'> Z Buds</h3>
        <NavLink className="no-underline text-gray-950 hover:text-red-600 m-2.5">
         viewall &gt;
        </NavLink>
    </div>
  )
}

export default DivSec