// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import NewsArticle from '../components/NewsArticle';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from an API
    fetch('http://localhost:8000/api/articles')  // Replace with your backend URL
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div>
      <h2>Home Page - Latest News</h2>
      {articles.map((article, index) => (
        <NewsArticle
          key={index}
          title={article.title}
          content={article.content}
          author={article.author}
          date={article.date}
        />
      ))}
    </div>
  );
};

export default Home;
