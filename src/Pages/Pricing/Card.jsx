import React from 'react'
import Pricing from './Pricing'

const Card = ({type , price, text, buttonText ="" ,isMostPopular = false }) => {
  return (
    <div  className='px-6 py-4 border-2  mt-10 rounded-lg shadow-lg'>
                <div className='flex justify-center'>
            {

                isMostPopular && <p className='btn-blue rounded-xl flex  h-10'>Most Popular</p>
            }
                </div>
            <br/>
            <h1  className='font-bold p-2'>{type}</h1>
            <p className=''>
                $<span className='text-[25px] font-bold'>{price}</span>/Month
            </p>
            <h2 className='mt-6' >{text}</h2>
            <div className='flex justify-center'>

            <button className={`${isMostPopular? "btn-blue" :"btn-outlined-black"} m-auto h-10 mt-10 mb-6`}>{buttonText}</button>
            </div>
    </div>
  )
}

export default Card