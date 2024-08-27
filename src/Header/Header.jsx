import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div  className='grid grid-cols-12 pb-2 border-b-2'>
            <p  className='col-span-2 text-[25px] mt-4 ml-20'>Lando</p>
            <ul className='flex justify-around col-span-4 mt-4' >
                <li><Link to={"/"}> Home</Link></li>
                <li><Link to="/price"> Pricing </Link></li>
                <li><Link to="/about"> About us</Link></li>
                <li><Link to="/contact"> Contact</Link></li>
            </ul>
            <div className='col-span-4 flex justify-end gap-1 mt-2'>
                <button   className='btn-pink'>Log in</button>
                <button  className='btn-blue'>Sing Up</button>
            </div>
    </div>
  )
}

export default Header