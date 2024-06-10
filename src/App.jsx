import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" src="/stfxLogo.png" />
        <nav>
          <ul>
            <li><a href="#"> <b>Home</b></a></li>
            <li><a href="news.jsx">News</a></li>
            <li><a href="#">Sports Clubs</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">Forms</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="container">
          <h1 className="neon">STFX ATHLETICS</h1>
          <h1 className="header"><em>Welcome to STFX ATHLETICS</em></h1>
          <p>Here at Saint Francis Xavier, we are dedicated to the athletic interests of our students in this community....</p>

          <button>STFX athletics staff →</button>
        </div>
      </main>
    </div>
  );
};

export default App;
