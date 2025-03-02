import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Girls Who Code</h1>
          <p>Empowering girls to learn coding and close the gender gap in technology.</p>
        </header>
      </div>

      <div className="Members-section">
        <h2 className="Members-title">Members</h2>
        <div className='Members'>
      
          <div className="Member-box">
            <h3>Olivia Laurel 🌸</h3>
            <p>Year: Junior</p>
            <p>Major: Computer Science</p>
          </div>

          <div className="Member-box">
            <h3>Lorenz De Robles 🚀</h3>
            <p>Year: Junior</p>
            <p>Major: Computer Science</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
