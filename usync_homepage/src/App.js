import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Comingsoon from './pages/Comingsoon';
import Games from './pages/Games';
import More from './pages/More';
import Navbar from './Navbar';
import Cod_Leagues from './pages/game_pages/CoD/Cod_Leagues';
// All CoD league pages will be imported the same way Snd_league was imported
// All that needs to be changed is the information after the last /
// Change from Snd_league to whatever the filename is
// Also make sure to have the name after import be spelled the exact same as the filename otherwise it will not work
import Snd_league from './pages/game_pages/CoD/leagues/Snd_league';

// Different components needed for homepage: Nav bar, on click events for each image + button currently just take to a random page, css (A LOT)


function App() {
  let component
  console.log(window.location.pathname);
  switch (window.location.pathname) {
    // To create a custom path to implement in the navbar simply hit enter after the last break;
    // type case like all the other cases and create a custom path, for example case "/cxp_league":
    // then for the component have it equal to the league page you imported
    // Finally have a break; after the component, everything should be the same format
    case "/":
      component = <Home />
      break;
    case "/Games":
      component = <Games />
      break;
    case "/Comingsoon":
      component = <Comingsoon />
      break;
    case "/More":
      component = <More />
      break;
    case "/Games/Cod/Cod_Leagues":
      component = <Cod_Leagues />
      break;
    case "/snd_league":
      component = <Snd_league />
      break;
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // Need to hollow out the button
    // Need to center everything
    // Need a long thin white underline
    // Need to implement mymaps
    // Need to link "here" to our events page
    <div className="App">
      <Navbar />
      <div>{component}</div>
      
    </div>    
  );
}

export default App;
