import React from 'react'
import { ImBlog } from 'react-icons/im'

const Navbar = () => {
    return (
        <nav className='flex justify-around border-4 border-r-0 border-l-0 border-t-0 rounded-3xl p-3 w-full max-w-screen-lg mx-auto'>
            <div className='flex'>
                <ImBlog className='animate-bounce text-slate-900/50 text-2xl' />
                <h3 className='text-slate-900/50 text-2xl capitalize font-extrabold font-mono'>MacBlog</h3>
            </div>
            <div className='mt-3'>
                <a className='text-slate-900/50 mx-7 text-lg capitalize font-extrabold font-mono tracking-wide hover:underline cursor-pointer animate-pulse'>Blog</a>
                <a className='text-slate-900/50 mx-7 text-lg capitalize font-semibold font-mono tracking-wide hover:underline cursor-pointer animate-pulse'>CreatePost</a>
            </div>
            {/* <a className='text-white mx-7 text-lg capitalize font-semibold font-mono tracking-wide hover:underline cursor-pointer animate-pulse'>Comment</a> */}
        </nav>
    )
}

export default Navbar