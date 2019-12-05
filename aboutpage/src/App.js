import React from 'react';
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

function App()
{
  return (
    <div className="About">

      <header className="App-header">

        <button class="right-button" onclick={leftSwipe()}> > </button>
        <button class="left-button" onclick={rightSwipe()}> &lt; </button>

        <img id="picture" src="https://peopledotcom.files.wordpress.com/2018/10/disney-house-overview-front-yard.jpg?w=2000&h=1124" className="App-logo" alt="logo" />

        <p> Edit <code> src/App.js </code> and save to reload. </p>

        <a className="App-link" href="https://projects.cs.nott.ac.uk/COMP2002/2019-2020/team16_project"
          target="_blank" rel="noopener noreferrer" > GitLab! </a>

      </header>

    </div>
  );
}

function leftSwipe()
{
  //Document.getElementbyId("picture").src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
}

function rightSwipe()
{
  //App.getElementbyId("picture").src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
}


export default App;

//http://10.20.30.140:3000/