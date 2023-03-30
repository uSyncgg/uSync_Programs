import { useState } from 'react';
import styles from './Home.module.css';
import Home from './pages/Home';
import Comingsoon from './pages/Comingsoon';
import Games from './pages/Games'; 
import Navbar from './Navbar';
import Cod_Leagues from './pages/game_pages/CoD/Cod_Leagues';
import Cod from './pages/game_pages/CoD/Cod.js';
import Cod_Lan from './pages/game_pages/CoD/Cod_Lan.js';
import Halo_Lan from './pages/game_pages/Halo/Halo_Lan.js';
import Lol_Lan from './pages/game_pages/LoL/Lol_Lan';
import Wz_Lan from './pages/game_pages/Warzone/Wz_Lan';
import Verification from './pages/more-pages/Verification';
import Becomeverified from './pages/more-pages/Becomeverified';
import Eventhost from './pages/more-pages/Eventhost';
import Contactus from './pages/more-pages/Contactus';
import AWL_League from './pages/game_pages/CoD/leagues/AWL_League';
import Halo_Leagues from './pages/game_pages/Halo/Halo_Leagues';
import Lol_Leagues from './pages/game_pages/LoL/Lol_Leagues';
import Rl_Leagues from './pages/game_pages/RocketLeague/Rl_Leagues';
import Val_Leagues from './pages/game_pages/Valorant/Val_Leagues';
import Wz_Leagues from './pages/game_pages/Warzone/Wz_Leagues';
// All CoD league pages will be imported the same way Snd_league was imported
// All that needs to be changed is the information after the last /
// Change from Snd_league to whatever the filename is
// Also make sure to have the name after import be spelled the exact same as the filename otherwise it will not work
import Snd_league from './pages/game_pages/CoD/leagues/Snd_league';
import NACAL_league from './pages/game_pages/CoD/leagues/NACAL_league';
import './pages/more-pages/Verification.css';
import './pages/more-pages/Eventhost.css';
import './pages/more-pages/Contactus.css';
import './pages/Comingsoon.css';

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
    case "/Games/Cod/Cod_Leagues":
      component = <Cod_Leagues />
      break;
    case "/snd_league":
      component = <Snd_league />
      break;
    case "/Games/Cod":
      component = <Cod />
      break;
    case "/Games/Cod/LANs":
      component = <Cod_Lan />
      break;
    case "/Games/Halo/LANs":
      component = <Halo_Lan />
      break;
    case "/Games/LoL/LANs":
      component = <Lol_Lan />
      break;
    case "/Games/Wz/LANs":
      component = <Wz_Lan />
      break;
    case "/NACAL_league":
      component = <NACAL_league />
      break;
    case "/Verification":
      component = <Verification />
      break;
    case "/Becomeverified":
      component = <Becomeverified />
      break;
    case "/Eventhost":
      component = <Eventhost />
      break;
    case "/Contactus":
      component = <Contactus />
      break;
    case "/AWL":
      component = <AWL_League />
      break;
    case "/Halo_Leagues":
      component = <Halo_Leagues />
      break;
    case "/Lol_Leagues":
      component = <Lol_Leagues />
      break;
    case "/Rl_Leagues":
      component = <Rl_Leagues />
      break;
    case "/Val_Leagues":
      component = <Val_Leagues />
      break;
    case "/Wz_Leagues":
      component = <Wz_Leagues />
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
