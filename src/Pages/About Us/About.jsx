import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import WithLando from '../../Body/WithLando'
import img from "./Image/image.png"
import img2 from "../../assets/graph.png"
import Profile from './profile'
const About = () => {
const Persons = [
    {
        id:1,
        fullName:"Hannah Mika",
        pos:"CEO",
    },
    {
        id:2,
        fullName:"Daniel Peter",
        pos:"CTO",
    },
    {
        id:3,
        fullName:"Lars Mikkel",
        pos:"Head of Operations",
    },
    {
        id:4,
        fullName:"Denis Forner",
        pos:"Head of Product",
    },
    {
        id:5,
        fullName:"Edward Finch",
        pos:"Head of Development",
    },
    {
        id:6,
        fullName:"Matthew Low",
        pos:"Tech Support",
    },
    {
        id:7,
        fullName:"Lucas Bell",
        pos:"Key Account Manager",
    },
    {
        id:8,
        fullName:"Michaela Hans",
        pos:"Platform Development",
    },
]
  return (
    <div>
        <Header/>
        <h1 className='text-[50px] font-bold text-center font-serif mt-40'>About us</h1>
        <p className='text-center font-serif '>
                We offer Revolutionary solution to industry<br/>
                problems. Join Lando community and experience<br/>
                the benefits of company optimization today!

        </p>
        <img className='w-2/5 mx-auto my-20  p-2 border-2 shadow-lg' src={img}/>
        <h1 className='m-auto font-sans font-bold text-center text-[30px]' >Our Mission</h1>
        <p className='w-1/2 m-auto text-center pb-10 border-b-2 border-black font-serif mt-4'>
        At Lando, we are committed to providing excellent services to out customers <br/>
        and clients and to help them achieve the best outcomes . we belive that we can  <br/>
        make a positive impact on our community , industry and the world. our Lando   <br/>
       team is dedicated to providing the best possible Service and support, and we   <br/>
       are always looking for ways to improve and innovate.
        </p>
        <div className='w-3/4 mx-auto pb-6  p-8 rounded-lg  grid   grid-cols-12 mt-20'>
    <div className='col-span-6 m-auto'>
      
        <h1 className='text-[40px]'>

        Let's Star <br/> working
        <br/>more
        <br/>efficient
        <br/>today!
        
        </h1>
    </div>
    <div className=' col-span-6 m-4'>
        <img className=' w-1/2 m-auto'  src={img2} height={100} />
    </div>


</div>

<div>
     
        <h1 className='m-auto font-sans font-bold text-center text-[30px] mt-10' >Team</h1>
        <p className='w-1/2 m-auto text-center mt-4'>Meet the people behind our magical product </p>

</div>
        <div className='w-2/4  m-auto flex flex-wrap justify-around gap-2'>
            {
                Persons?.map(item=>{
                    return <Profile id={item?.id} fullName={item?.fullName} position={item?.pos} />
                })
            }
        </div>
        <WithLando/>
        <Footer/>
    </div>
  )
}

export default About