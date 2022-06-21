import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom'

 //fetch data from api endpoint using axios
 export const URL = "https://blogpostapi1.herokuapp.com/";


const Blog = () => {

    const [posts, setPosts] = useState([]);

    //using axios to make api call and get required data
    useEffect(() => {
        Axios.get(URL)
            .then((res) => (res.data.data))
            .then((data) => {
                setPosts(data);
            })
            .catch(
                console.log("failed to fetch data")
            );
    }, []);

    return (
        <div className='p-2 w-full max-w-screen-sm mt-2 mx-auto'>
            {posts.map((post) => {
                return (
                    <div className='border-2 border-l-0 border-r-0 border-slate-500 my-8 p-4 rounded-3xl' key={post?.id}>
                        <p className='font-bold mb-2 uppercase text-2xl'>{post?.name}</p>
                        <p className='font-semibold mb-2 text-xl'>{post?.title}</p>
                        <div className='flex justify-between'>
                            <h2 className='font-mono underline'>{post?.content}</h2>
                        </div>
                        <div className='w-1/4 mx-auto'>
                            <Link to={`/post/${post.id}`}>
                                <button className='bg-slate-500 h-10 px-7 text-white rounded-sm my-1'>Read More...</button>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Blog