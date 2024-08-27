import React from 'react'
import img from "../assets/graph.png"
import img2 from "../assets/graph2.png"
import img3 from '../assets/img.png';
import img4 from '../assets/image.png';
import img5 from '../assets/image4.png';
import {StarFill} from "react-bootstrap-icons";
import WithLando from './WithLando';

const StartFill = ()=>{
    const star = [];
    for(let i=0; i<5; i++){
        star.push(<StarFill color='blue'/>)
    }
    return star;
}
const Body = () => {
  return (
    <>

    <div className='w-3/4 m-auto grid grid-cols-12 mt-5 '>
            <div className='col-span-6 m-auto row-span-2'>
                <p>--free 30 days</p>
                <h1 className='text-[40px]'>the best way  <br/> to
                showcase your projects</h1>
                <p className='font-sans'><br/>here you can put a short desctiption about your project</p>
                <br/>
                <div className=' grid gap-1'>

                <button className='btn-primary'>try for free</button>
                <button className='btn-outlined-black'> see how it works </button>
                </div>
            </div>
            <div className='col-span-6'>
                <img  src={img}/>
            </div>
            
    </div>
    <div className='w-3/4 m-auto  grid h-80   grid-cols-12 mt-60'>
            <div className=' col-span-6 m-4'>
                <img className='w-1/2 m-auto'  src={img2} height={100}/>
            </div>
            <div className='col-span-6 m-auto'>
              
                <h1 className='text-[40px]'>introducing <br/> good solution</h1>
                <p className='font-sans'><br/>join our community today and experience benefits today! </p>
                <br/>
                <div className=' grid gap-1'>

                <button className='btn-pink'>try for free</button>
                {/* <button className='btn-outlined-black'> see how it works </button> */}
                </div>
            </div>
            
    </div>
    <div className='w-3/4 m-auto  border-y-2 grid h-80   grid-cols-12 mt-60'>
            <div className='col-span-6 m-auto'>
              
                <h1 className='text-[40px]'>all your work <br/> is safe with us!</h1>
                <p className='font-sans mx-auto'><br/> we take your data security serious , which is<br/>
                 why we use advanced encrypted protocols <br/>
                 to protect your files in the cloud your data is safe and secure with us </p>
                <br/>
                <div className=' grid gap-1'>

                <button className='btn-outlined-pink'>try now</button>
                {/* <button className='btn-outlined-black'> see how it works </button> */}
                </div>
            </div>
            <div className=' col-span-6 m-4'>
                <img className='w-1/2 m-auto'  src={img3} height={100}/>
            </div>
            
    </div>
    <div className='w-3/4 m-auto pb-6 border-b-2 grid h-80   grid-cols-12 mt-60'>
            <div className=' col-span-6 m-4'>
                <img className='w-1/2 m-auto'  src={img4} height={100}/>
            </div>
            <div className='col-span-6 m-auto'>
              
                <h1 className='text-[40px]'>Cost saving in a <br/> smart way</h1>
                <p className='font-sans'><br/>
                  powerful tool that helps you reduce costs and save money on <br/>
                  your business operations. With advanced analytics and optimization algorithms , Costsaver analyzes your existing <br/>
                  workflows and identifies areas for improvement <br/>
                </p>
                <br/>
                <div className=' grid gap-1'>

                <button className='btn-outlined-black'>try now</button>
                {/* <button className='btn-outlined-black'> see how it works </button> */}
                </div>
            </div>
    </div>
    <div className='w-3/4 m-auto border-2 bg-white rounded-lg shadow-xl p-20  grid  grid-row-2  grid-cols-12 mt-96'>
            <div className=' col-span-6 m-4 text-left'>
                <img className='w-1/2 -translate-y-6 m-auto'  src={img5} height={100}/>
            <h1 className='text-[50px]'>How to join our community</h1>
            <p>just 3 simple steps to optimize your company optimizations</p>
            <button className='btn-blue m-4 mb-20 '>Sing up now</button>
           </div>
            <div className='col-span-6 m-auto'>
              <div className='p-6 border-b-2'>

                <h1 className='text-[40px]'>step 1</h1>
                <p className='font-sans'><br/>
                Reach out to one of our specialists  <br/>
                and have short introduction session
                </p>
              </div>
              <div className='p-6 border-b-2'>

                <h1 className='text-[40px]'>step 2</h1>
                <p className='font-sans'><br/>
                   our specialist will prepare  <br/>
                    personalized package suitable for  <br/>
                        your needs
                </p>
              </div>
              <div className='p-6 border-b-2'>

                <h1 className='text-[40px]'>step 3</h1>
                <p className='font-sans'><br/>
                 Poof! you are ready to work smart <br/>
                with optimized operations.
                </p>
              </div>
           
                <br/>
                <div className=' grid gap-1'>

               
                {/* <button className='btn-outlined-black'> see how it works </button> */}
                </div>
            </div>
    </div>
    <h1 className='mt-96 text-[70px] text-center'>Testimonials</h1>
    <h3 className='text-center text-[30px]'> People love what we do and we want to let you know</h3>
    <div className='w-3/4 m-auto grid grid-cols-3 gap-7 mt-16' >
            <div className='border-2 p-4 rounded-lg shadow-lg w-2/3 m-auto text-center'  >
                <h2 className='font-bold'>"Since implementing <br/> Lando our business has<br/> seen significant growth"</h2>
                <h3 className='flex justify-center m-4 '>{StartFill()}</h3>
                <h1 className='font-bold'>Jack Sibire</h1>
                <p>Lead Manager , Growio</p>
            </div>
            <div className='border-2 p-4 rounded-lg shadow-lg  w-2/3 m-auto text-center ' >
                <h2 className='font-bold'>"i recommend lando to <br/> any   business looking for <br/> improvement"</h2>
                <h3 className='flex justify-center m-4 '>{StartFill()}</h3>
                <h1 className='font-bold font-serif'>Adele Mouse</h1>
                <p>Product Manager , Mousio</p>
        
            </div>
            <div className='border-2 p-4 rounded-lg shadow-lg w-2/3 m-auto text-center ' >
                <h2 className='font-bold'>"i can't imagine running <br/>  our company without it</h2>
                <h3 className='flex justify-center m-4 '>{StartFill()}</h3>
                <h1 className='font-bold font-serif'>Ben Clock</h1>
                <p>CTO, Clockwork</p>
            </div>
    </div>
    <WithLando/>
    </>
  )
}

export default Body