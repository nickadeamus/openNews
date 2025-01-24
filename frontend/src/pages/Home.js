import React, { useEffect, useState } from 'react';
import NewsArticle from '../components/NewsArticle';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use the environment variable set in docker-compose for API URL
    const API_URL = process.env.REACT_APP_API_URL || 'http://backend:8000';

    fetch(`${API_URL}/news`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.articles || []); // Ensure articles array exists
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Home Page - Latest News</h2>
      {loading && <p>Loading articles...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && articles.length > 0 ? (
        articles.map((article, index) => (
          <NewsArticle
            key={index}
            title={article.title}
            content={article.description}
            author={article.author || 'Unknown'}
            date={article.publishedAt || 'No date available'}
          />
        ))
      ) : (
        !loading && <p>No articles found.</p>
      )}
    </div>
  );
};

export default Home;
