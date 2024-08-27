import React from 'react'

const Footer = () => {
  return (
    <div className='mt-60 w-5/6 mx-auto px-20 pt-10 border-t-2  pb-10 flex justify-around'>
            <div className='flex flex-col'>
                <h1 className='text-[30px] font-bold'>Lando</h1>
                <p>2021 &copy; Lando
                <br/> all right reserved</p>
            </div>
            <ul className='flex flex-col justify-around'>
                <li>Home</li>
                <li>Pricing</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
            </ul>
            <ul>
                <li>Privacy Policy</li>
                <li>Therms of Service</li>
             
            </ul>
         
    </div>
  )
}

export default Footer