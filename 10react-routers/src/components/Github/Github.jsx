import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch("https://api.github.com/users/ikarannarode")
    //         .then((res) => res.json())
    //         .then((data) => setData(data))
    // }, [])
    return (
        <>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}</div>
            <img src={data.avatar_url} alt="" className=' h-96 w-96 m-4' />
        </>

    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ikarannarode');
    return response.json();
}