import React, { useReducer, useEffect, useState } from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';
import './Comments.css'; 
import { Button } from 'antd';

const initialState = {
  comments: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      return { ...state, comments: action.payload, loading: false };
    case 'ADD_COMMENT':
      return { ...state, comments: [...state.comments, action.payload] };
    case 'DELETE_COMMENT':
      return { 
        ...state, 
        comments: state.comments.filter(comment => comment.id !== action.payload) 
      };
    default:
      return state;
  }
};

function Comments(){
  const [state, dispatch] = useReducer(reducer, initialState);
  const [darkMode, setDarkMode] = useState(false);

  const fetchComments = async () => {
    const response = await fetch('https://dummyjson.com/comments');
    const data = await response.json();
    dispatch({ type: 'FETCH_COMMENTS', payload: data.comments });
  };

  const deleteComment = async (id) => {
    await fetch(`https://dummyjson.com/comments/${id}`, { method: 'DELETE' });
    dispatch({ type: 'DELETE_COMMENT', payload: id });
  };

  useEffect(() => {
    fetchComments();
    const interval = setInterval(fetchComments, 30000);
    return () => clearInterval(interval);
  }, []);

  if (state.loading) return <div>Loading...</div>;

  return (
    <div className={`comments-container ${darkMode ? 'dark' : ''}`}>
      <h1>Comments</h1>
      <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      <CommentList comments={state.comments} deleteComment={deleteComment} />
      <CommentInput dispatch={dispatch} />
      <Button
          type="primary"
          ghost
          size="large"
          style={{ display: "block", margin: "2rem auto 0" }}
          onClick={() => window.history.back()}
        >
         Back To Map🔙
        </Button>
    </div>
    
  );
};

export default Comments;
