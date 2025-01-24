import React, { useEffect, useState } from 'react';
import NewsArticle from '../components/NewsArticle';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.curl http://backend:8000 + '/news')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched articles:", data);  // Debug log
        setArticles(data.articles || []); // Ensure correct key
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching articles:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Home Page - Latest News</h2>
      {loading && <p>Loading articles...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <NewsArticle
            key={index}
            title={article.title}
            content={article.description}
            author={article.author}
            date={article.publishedAt}
          />
        ))
      ) : (
        !loading && <p>No articles available.</p>
      )}
    </div>
  );
};

export default Home;
