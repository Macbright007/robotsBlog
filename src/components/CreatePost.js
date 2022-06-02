import React from 'react'

const CreatePost = () => {
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
        />
      </div>
      <div className="py-2">
        <label for="body" className="text-xs text-gray-600 font-semibold">
          Comment:
        </label>
        <br />
        <textarea
          type="text"
          id="body"
          className="rounded p-2 md:p-3 lg:p-3 w-full border-r-2 border-gray-200 border-2 focus:bg-gray-200 focus:outline-none"
        />
      </div>

      <button className="bg-black text-white w-full font-semibold p-3 my-7 md:p-2 lg:p-2 rounded">
        submit
      </button>


    </form>
  )
}

export default CreatePost