import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
   const data = useLoaderData()
   // const [data, setData] = useState([])
   // useEffect(() => {
   //    fetch('https://api.github.com/users/SOURAVGHOSH123')
   //       .then(response => response.json())
   //       .then(data => {
   //          console.log(data);
   //          setData(data)
   //       })
   // }, []);

   return (
      <div className='bg-gray-500 text-3xl m-4 p-4 text-center'>
         <p className='bg-white-500'>Github Followers: {data.followers}</p>
         <p>Github Followers: {data.following}</p>
         <img src={data.avatar_url} className='text-center' width={300} alt='github picture' />
      </div>
   )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/SOURAVGHOSH123')
   return response.json()
}