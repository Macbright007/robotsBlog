import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom'
// import { Records } from "./Data"

const Blog = () => {

    const [posts, setPosts] = useState([]);

    //fetch data from api endpoint using axios
  const URL = "https://blogpostapi1.herokuapp.com/";

  //using axios to make api call and get required data
  useEffect(() => {
    Axios.get(`${URL}`)
      .then((res) => (res.data.data))
      .then((data) => {
        setPosts(data);
      });
  }, []);

    return (
        <div className='p-2 w-full max-w-screen-sm mt-2 mx-auto'>
            {posts.map((post) => {
                return (
                    <div className='border-4 border-t-0 border-r-0 border-b-0 border-slate-500 my-8 pl-2' key={post.id}>
                        <p className='font-semibold mb-2'>{post.name}</p>
                        <div className='flex justify-between'>
                            <h2 className='font-bold font-mono underline'>{post.content}</h2>
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