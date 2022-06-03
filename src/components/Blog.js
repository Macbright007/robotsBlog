import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom'

// import { Records } from "./Data"

const Blog = () => {

    const [posts, setPosts] = useState([]);
    // const [comment, setComment ] = useState();

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


    // //function to get comment
    // const getComment = (e) => {
    //     setComment(e.target.value);
    //     console.log(comment)
    // };
    return (
        <div className='p-2 w-full max-w-screen-sm mt-2 mx-auto'>
            {posts.map((post) => {
                return (
                    <div className='border-4 border-t-0 border-r-0 border-b-0 border-slate-500 my-8 pl-2' key={post.id}>
                        <p className='font-semibold mb-2'>{post.name}</p>
                        <p className='font-semibold mb-2'>{post.title}</p>
                        <div className='flex justify-between'>
                            <h2 className='font-bold font-mono underline'>{post.content}</h2>
                            <Link to="/comment/:id/" className='text-blue-700 font-extrabold font-sm hover:underline'>Comments></Link>
                        </div>
                        {/* <div className="py-2">
                            <label for="body" className="text-xs text-gray-600 font-semibold">
                                Comment:
                            </label>
                            <br />
                            <textarea
                                type="text"
                                id="body"
                                className="rounded p-1 md:p-1 lg:p-1 w-full border-r-2 border-gray-200 border-2 focus:bg-gray-200 focus:outline-none"
                                onChange={getComment}
                            />
                        </div> */}
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