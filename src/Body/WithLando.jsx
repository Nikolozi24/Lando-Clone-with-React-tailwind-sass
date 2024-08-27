import React from 'react'
import img4 from '../assets/image.png';
const WithLando = () => {
  return (
    <div className='w-3/4 m-auto pb-6 border-2 p-8 rounded-lg shadow-lg grid   grid-cols-12 mt-60'>
    <div className='col-span-6 m-auto'>
      
        <h1 className='text-[40px]'>Get Starting with <br/> Lando Today</h1>
        <p className='font-sans'><br/>
         start optimization your process<br/>
          
        </p>
        <br/>
        <div className=' grid gap-1'>

        <button className='btn-blue'>try now</button>
        {/* <button className='btn-outlined-black'> see how it works </button> */}
        </div>
    </div>

    <div className=' col-span-6 m-4'>
        <img className='w-1/2 m-auto'  src={img4} height={100}/>
    </div>

</div>
  )
}

export default WithLando