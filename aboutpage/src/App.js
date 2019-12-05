import React from 'react';
import logo from './logo.svg';
import './App.css';

//PROTOTYPE:
//Have 3 or 4 JSON with information about restaurants / facilities
// - Pictures (1 or 2)
// - Name
// - Pricing (Cheap/medium/expensive)
// - Discount available? (Y/N)
// - Distance (walking time)
// - Location (Address)
//Make the react app which can read these JSON and display them in a SPA
// - Arrows to switch between restaurants
//   - Smooth transitions - slides across
// - Formats page so they have consistent styling
// Don't merge this into master!
// - Perhaps make a "prototypes" branch which we can push to.

function App() {
  return (
    <div className="AboutPage">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> New test? </p>
        <a
          className="App-link"
          href="https://projects.cs.nott.ac.uk/COMP2002/2019-2020/team16_project"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitLab!
        </a>
      </header>
    </div>
  );
}

export default App;