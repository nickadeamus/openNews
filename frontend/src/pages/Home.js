import React, { useEffect, useState } from 'react';
import NewsArticle from '../components/NewsArticle';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/news')  // Make sure the API endpoint matches the backend route
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setArticles(data.articles))  // Access articles array from the response
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div>
      <h2>Home Page - Latest News</h2>
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
        <p>Loading articles...</p>
      )}
    </div>
  );
};

export default Home;

