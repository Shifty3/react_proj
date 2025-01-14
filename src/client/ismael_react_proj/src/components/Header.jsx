import React from "react";
import "../styles/main.scss"; // Import a SCSS file if you want to add styles

const Header = () => {
  return (
    <header className="header">
      <h1>Welcome to My React App!</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
