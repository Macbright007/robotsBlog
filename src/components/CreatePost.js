import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";


const CreatePost = () => {
  const [newPost, setNewPost] = useState({ name: "", title: "", content: "" })
  const [loading, setLoading] = useState(false)

  //used to redirect to home page
  let navigate = useNavigate();

  //function to get author name
  const getPostDetails = (e) => {
    setNewPost(state => ({...state, [e.target.name]: e.target.value})) 
  }

//function to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
    const result =   await Axios.post('https://blogpostapi1.herokuapp.com/', 
        newPost
      )
      if (result?.status === 200){
        setLoading(false)
        return navigate("/", { replace: true });
      }
    }
    catch {
      setLoading(false)
    }
    
  };
  // const {title, content, name} = newPost

  return (
    <form className='max-w-xl mx-auto mt-7' onSubmit={handleSubmit}>
      <div className="py-2">
        <label for="authorname" className="text-xs text-gray-600 font-semibold">
          AuthorName:
        </label>
        <br />
        <input
          type="text"
          id="text"
          name="name"
          value={newPost.name}
          className="rounded p-2 md:p-2 lg:p-2 w-full border-r-2 border-gray-200 border-2 focus:bg-gray-200 focus:outline-none"
          onChange={getPostDetails}
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
          name="title"
          value={newPost.title}
          className="rounded p-2 md:p-2 lg:p-2 w-full border-r-2 border-gray-200 border-2 focus:bg-gray-200 focus:outline-none"
          onChange={getPostDetails}
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
          name="content"
          value={newPost.content}
          className="rounded p-2 md:p-5 lg:p-5 w-full border-r-2 border-gray-200 border-2 focus:bg-gray-200 focus:outline-none"
          onChange={getPostDetails}
        />
      </div>

      {/* <Link to="/"> */}
      <button disabled={loading} className="bg-black text-white w-full font-semibold p-3 my-7 md:p-2 lg:p-2 rounded">
      {
        loading ? 'Submitting...': 'Submit'
      }  
      </button>
      {/* </Link> */}
    </form>
  )
}

export default CreatePost