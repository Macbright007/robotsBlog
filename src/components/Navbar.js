import { ImBlog } from 'react-icons/im'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex justify-around border-4 border-slate-400 border-r-0 border-l-0 border-t-0 rounded-3xl p-3 w-full max-w-screen-md mx-auto'>
            <div className='flex mt-2'>
                <ImBlog className='animate-bounce text-slate-600 text-2xl' />
                <h3 className='text-slate-600 text-2xl capitalize font-extrabold'>MacBlog</h3>
            </div>
            <div className='mt-3'>
                <Link to="/" className='text-slate-500 mx-7 text-lg capitalize font-extrabold tracking-wide hover:underline cursor-pointer animate-pulse'>Blog</Link>
                <Link to="/create-post/" className='text-slate-500 mx-7 text-lg capitalize font-extrabold tracking-wide hover:underline cursor-pointer animate-pulse'>CreatePost</Link>
            </div>
            {/* <a className='text-white mx-7 text-lg capitalize font-semibold font-mono tracking-wide hover:underline cursor-pointer animate-pulse'>Comment</a> */}
        </nav>
    )
}

export default Navbar