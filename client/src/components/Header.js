// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Dynamic Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
