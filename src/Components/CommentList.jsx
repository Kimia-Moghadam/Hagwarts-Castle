import React from 'react';

const CommentList = ({ comments, deleteComment }) => {
  return (
    <ul className="comments-list">
      {comments.map(comment => (
        <li key={comment.id} className="comment-item">
          <span className="comment-user">{comment.user.fullName}:</span> 
          <span className="comment-body">{comment.body}</span> 
          <button className="delete-button" onClick={() => deleteComment(comment.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
