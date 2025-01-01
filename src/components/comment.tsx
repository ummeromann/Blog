"use client"
import React, { useState } from 'react';

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <h1 className='font-bold text-1xl'>Comments Section</h1>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          style={{
            width: '100%',
            padding: '0.5rem',
            marginBottom: '0.5rem',
            boxSizing: 'border-box',
          }}
        />
        <button
          onClick={handleAddComment}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Add Comment
        </button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#f9f9f9',
                padding: '0.5rem',
                marginBottom: '0.5rem',
                border: '1px solid #ddd',
              }}
            >
              {comment}
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
