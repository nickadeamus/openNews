// src/components/NewsArticle.js
import React from 'react';

const NewsArticle = ({ title, content, author, date }) => {
  return (
    <div className="article-card" style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <small>{author} | {date}</small>
    </div>
  );
};

export default NewsArticle;
