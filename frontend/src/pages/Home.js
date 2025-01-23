// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import NewsArticle from '../components/NewsArticle';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch articles from the FastAPI backend
    fetch('http://localhost:8000/api/articles')  // Ensure this URL is correct
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Home Page - Latest News</h2>

      {/* Show loading spinner */}
      {loading && <p>Loading articles...</p>}

      {/* Show error message if the API call fails */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* Render articles only when available */}
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <NewsArticle
            key={index}
            title={article.title}
            content={article.content}
            author={article.author}
            date={article.date}
          />
        ))
      ) : (
        !loading && !error && <p>No articles available.</p>
      )}
    </div>
  );
};

export default Home;
