import React from 'react'
import { Link } from 'react-router-dom'
import { Records } from "./Data"

const Blog = () => {

    return (
        <div className='p-2 w-full max-w-screen-sm mt-2 mx-auto'>
            {Records.map((data) => {
                return (
                    <div className='border-4 border-t-0 border-r-0 border-b-0 border-slate-500 my-8 pl-2' key={data.id}>
                        <p className='font-semibold mb-2'>{data.body}</p>
                        <div className='flex justify-between'>
                            <h2 className='font-bold font-mono underline'>{data.author_name}</h2>
                            <Link to="/comment/:id/" className='text-blue-700 font-extrabold font-sm hover:underline'>Comments></Link>
                        </div>
                        <div className='w-1/4 mx-auto'>
                            <button className='bg-slate-500 h-10 px-7 text-white rounded-sm my-1'>Read More...</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog