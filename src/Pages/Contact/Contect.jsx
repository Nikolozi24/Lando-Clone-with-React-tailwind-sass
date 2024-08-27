import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import  img from "./Images/Login.png"
const Contect = () => {
  return (
    <div>
    <Header/>
    <div className='w-3/4 m-auto grid grid-cols-12 mt-5  p-20'>
            <div className='col-span-6'>
                <img  src={img}/>
            </div>
            <div className='col-span-6 m-auto row-span-2'>
                    <form className='flex flex-col  '>
                        <legend className='text-[30px] mb-10'>Contact Us</legend>
                        <p>

                        Explore the future with us.
                        <br/>
                        Feel free to get in touch
                        </p>
                            <label>Name</label>
                            <input className='my-2 p-2 rounded-lg font-bold text-black font-sans border-2 ' placeholder='Full Name'/>
                            <label>Email</label>
                            <input className='my-2 p-2 rounded-lg font-bold text-black font-sans border-2 ' placeholder='Email Address'/>
                            <label>Message</label>
                            <input className='my-2 p-2 rounded-lg font-bold text-black font-sans border-2 ' placeholder='How can we get better?'/>
                            <button className='btn-blue'>Send Message</button>


                    </form>
            </div>
            
    </div>
    <Footer/>
    </div>
  )
}

export default Contect