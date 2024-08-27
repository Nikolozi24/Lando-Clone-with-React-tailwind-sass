import React from 'react'

const Profile = ({id , fullName, position }) => {
  return (
   <div className='flex flex-col justify-center p-4 text-center'>
        <img  width={130} className="rounded-full "src={`https://xsgames.co/randomusers/assets/avatars/male/${id}.jpg`}/>
        <h1 className='font-bold font-serif'>{fullName}</h1>
        <p className='font-serif'>{position}</p>
   </div>
  )
}

export default Profile