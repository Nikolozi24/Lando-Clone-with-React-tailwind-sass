import React from 'react'
import Header from '../../Header/Header'
import WithLando from '../../Body/WithLando'
import Footer from '../../Footer/Footer'
import Card from './Card'
import Utility from './utility'
import Accordion from './Accordination'
const Pricing = () => {
  return (
    <>  
        <Header/>

            <h1 className='text-[30px] font-bold text-center mt-20 font-sans'>Pricing</h1>
            <p className=' font-sans text-center mt-4 '> our pricing is not expensive, but it's not <br/>
                cheap either, it's exactly what is should be 
            </p>
<div className='w-2/4 m-auto grid grid-cols-3 gap-3 font-sans '>

            <Card type={"Basic"}  price={9} text={"For individuals and small \n Teams"} buttonText='get Started with basic'/>
            <Card type={"Pro"}  price={19} text={"For startups and growing \n business"} buttonText='get Started with Pro' isMostPopular={true}  />
            <Card type={"Business"}  price={99} text={"For organizations with \n advanced needs"} buttonText='get Start with Business'/>
</div>
    <div className='w-1/2 mx-auto my-20'>
    <h1 className='text-[30px] font-bold' >Compare Features</h1>

    </div>
    <div className='w-3/4 m-auto'>
            <ul className='flex text-[20px] font-bold border-b-2 pb-10 justify-around'>
                <li>Basic</li>
                <li>Pro</li>
                <li>Business</li>
            </ul>
    </div>
    <div className='pt-10 w-4/5 m-auto flex justify-around'>
        <ul>
            <li className=''><Utility text={"Process Analysis"}/></li>
            <li className=''><Utility text={"Task Management"}/></li>
            <li className=''><Utility text={"Performance Metrics"}/></li>
            <li className=''><Utility text={"Customizable Reports "}/></li>
            <li className=''><Utility text={"Email Integration "}/></li>
            <li className=''><Utility text={"Real-time Collaboration "}/></li>
            <li className=''><Utility text={"Email Integration "}/></li>
            
        </ul>
        <ul>
            <li className=''><Utility text={"Process Analysis"}/></li>
            <li className=''><Utility text={"Task Management"}/></li>
            <li className=''><Utility text={"Performance Metrics"}/></li>
            <li className=''><Utility text={"Customizable Reports "}/></li>
            <li className=''><Utility text={"Email Integration "}/></li>
            <li className=''><Utility text={"Real-time Collaboration "}/></li>
            <li className=''><Utility text={"Email Integration "}/></li>
            <li className=''><Utility text={"Customizable Reports "}/></li>
            <li className=''><Utility text={"Automated Workflows "}/></li>
        </ul>
        <ul>
            <li className=''><Utility text={"Process Analysis"}/></li>
            <li className=''><Utility text={"Task Management"}/></li>
            <li className=''><Utility text={"Performance Metrics"}/></li>
            <li className=''><Utility text={"Customizable Reports "}/></li>
            <li className=''><Utility text={"Email Integration "}/></li>
            <li className=''><Utility text={"Real-time Collaboration "}/></li>
            <li className=''><Utility text={"Email Integration "}/></li>
            <li className=''><Utility text={"Customizable Reports "}/></li>
            <li className=''><Utility text={"Automated Workflows "}/></li>
            <li className=''><Utility text={"Analytics Dashboard "}/></li>
            <li className=''><Utility text={"SLA Management "}/></li>
        
        </ul>

    </div>
  <Accordion/>
        <WithLando/>
        <Footer></Footer>
    </>
  )
}

export default Pricing