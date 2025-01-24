import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import axios from 'axios';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your backend API endpoint (e.g., http://localhost:8000/articles)
    axios.get('http://localhost:8000/news')
      .then(response => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
   <div className="container">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home articles={articles} loading={loading} error={error} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
   </div> 
  );
}

export default App;
