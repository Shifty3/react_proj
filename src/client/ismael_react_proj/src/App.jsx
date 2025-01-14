import React from "react";
import "./styles/main.scss"; // Import the main SCSS file for global styles
import Header from "./components/Header"; // Import the Header component

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <h2>Welcome to My React App!</h2>
        <p>This is the main content.</p>
      </main>
    </div>
  );
};

export default App;
