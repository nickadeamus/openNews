import React from 'react';

const NewsArticle = ({ title, content, author, date }) => {
  return (
    <div className="news-article">
      <h3>{title}</h3>
      <p>{content}</p>
      <p><strong>By:</strong> {author || 'Unknown'}</p>
      <p><small>{new Date(date).toLocaleDateString()}</small></p>
    </div>
  );
};

export default NewsArticle;

