import React from 'react'
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';


const CreatePost = () => {

  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  



  //fetch data from api endpoint using axios
  const URL = "https://blogpostapi1.herokuapp.com/";

  //using axios to make api call and get required data
  useEffect(() => {
    Axios.post(`${URL}`)
      .then((res) => (res.data.data))
      .then((data) => {
        // setPosts(data);
      });
  }, []);


  //function to get author name
  const getAuthorname = (e) => {
    setName(e.target.value);
  }

  //function to get Title
  const getTitle = (e) => {
    setTitle(e.target.value);
  }
  //function to get content
  const getContent = (e) => {
    setContent(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  Axios.post('https://blogpostapi1.herokuapp.com/', {
      title,
      name,
      content
    })

  }

  return (
    <form className='max-w-xl mx-auto mt-7'>
      <div className="py-2">
        <label for="authorname" className="text-xs text-gray-600 font-semibold">
          AuthorName:
        </label>
        <br />
        <input
          type="text"
          id="text"
          className="rounded p-2 md:p-2 lg:p-2 w-full border-r-2 border-gray-200 border-2 focus:bg-gray-200 focus:outline-none"
          onChange={getAuthorname}
        />
      </div>
      <div className="py-2">
        <label for="title" className="text-xs text-gray-600 font-semibold">
          Title:
        </label>
        <br />
        <input
          type="text"
          id="title"
          className="rounded p-2 md:p-2 lg:p-2 w-full border-r-2 border-gray-200 border-2 focus:bg-gray-200 focus:outline-none"
          onChange={getTitle}
        />
      </div>
      <div className="py-2">
        <label for="body" className="text-xs text-gray-600 font-semibold">
          Body:
        </label>
        <br />
        <textarea
          type="text"
          id="body"
          className="rounded p-2 md:p-5 lg:p-5 w-full border-r-2 border-gray-200 border-2 focus:bg-gray-200 focus:outline-none"
          onChange={getContent}
        />
      </div>

      <Link to="/">
        <button className="bg-black text-white w-full font-semibold p-3 my-7 md:p-2 lg:p-2 rounded" onSubmit={handleSubmit}>
          submit
        </button>
      </Link>
    </form>
  )
}

export default CreatePost