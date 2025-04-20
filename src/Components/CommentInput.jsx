import React, { useState } from 'react';

const CommentInput = ({ dispatch }) => {
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    const comment = {
      id: Date.now(),
      body: newComment,
      user: {
        fullName: "Anonymous",
        likes: 0
      }
    };
    dispatch({ type: 'ADD_COMMENT', payload: comment });
    setNewComment('');
  };

  return (
    <div>
      <input 
        type="text" 
        value={newComment} 
        onChange={(e) => setNewComment(e.target.value)} 
        placeholder="Add a new comment" 
        className="comment-input"
      />
      <button className="add-button" onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default CommentInput;
