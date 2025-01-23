// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '20px' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff' }}>About</Link>
    </nav>
  );
};

export default Navbar;
