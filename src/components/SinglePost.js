import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Axios from 'axios';


const Comments = () => {
  const [content, setContent] = useState('');
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState(null)

  const params = useParams();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const result = await Axios.post('https://blogpostapi1.herokuapp.com/comment', {
        content,
        post: params.id,
      });
      const newComment = result.data.data[0] //fetching new comment
      const newCommentList = [...comments] //copying old comment with new one
      newCommentList.push(newComment) //updating old comment with new one

      setComments(newCommentList)
      setContent('')//clearing the textarea
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        //combinning all the request together with a promise
        const [post, comments] = await Promise.all([
          Axios.get(
            `https://blogpostapi1.herokuapp.com/${params.id}`
          ),
          Axios.get(
            `https://blogpostapi1.herokuapp.com/comment/all_comments/${params.id}`
          ),
        ]);
        setPost(post.data.data[0])
        setComments(comments.data.data);
      } catch {
        console.log("failed to Load comments");
      }
    };

    getComments();
  }, [params.id]);

  return (
    <form className='max-w-xl mx-auto mt-7'>
      <div className='border-2 border-l-0 border-r-0 border-slate-500 my-8 p-4 rounded-3xl'>
        <p className='font-bold mb-2 uppercase text-2xl'>{post?.name}</p>
        <p className='font-semibold mb-2 text-xl'>{post?.title}</p>
        <div className='flex justify-between'>
          <h2 className='font-mono underline'>{post?.content}</h2>
        </div>
      </div>
      <div className="py-2">
        {comments.map((comment) => {
          return (
            <p className="comment-content" key={comment.id}>
              {comment.content}
            </p>
          );
        })}
        <label for="body" className="text-xs text-gray-600 font-semibold">
          Comment:
        </label>

        <textarea
          cols="30"
          rows="3"
          value={content}
          className="rounded p-1 md:p-1 lg:p-1 w-full border-r-2 border-gray-200 border-2 focus:bg-gray-200 focus:outline-none"
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>

      <button className='bg-slate-500 h-10 px-7 text-white rounded-sm my-1' onClick={handleClick}>
        Comment
      </button>
    </form>
  );
};

export default Comments;