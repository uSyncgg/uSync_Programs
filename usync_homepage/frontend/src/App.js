import { useState } from 'react';
//import styles from './Home.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Comingsoon from './pages/Comingsoon';
import Games from './pages/Games';
import './App.css';
import Navbar from './Navbar';

import Cod_headtohead from './pages/game_pages/CoD/Cod_headtohead'
import Cod_Wagers from './pages/game_pages/CoD/Cod_Wagers'
import Cod_Leagues from './pages/game_pages/CoD/Cod_Leagues';
import Cod from './pages/game_pages/CoD/Cod';
import Cod_Lan from './pages/game_pages/CoD/Cod_Lan';

import CodTourneys from './pages/game_pages/CoD/CodTourneys';


import Halo_headtohead from './pages/game_pages/Halo/Halo_headtohead'
import Halo_Wagers from './pages/game_pages/Halo/Halo_Wagers'
import Halo_Leagues from './pages/game_pages/Halo/Halo_Leagues'
import Halo from './pages/game_pages/Halo/Halo'
import Halo_Lan from './pages/game_pages/Halo/Halo_Lan';

import Lol_Lan from './pages/game_pages/LoL/Lol_Lan';
import LoL from './pages/game_pages/LoL/LoL'
import Lol_headtohead from './pages/game_pages/LoL/Lol_headtohead'
import LoL_Wagers from './pages/game_pages/LoL/LoL_Wagers'
import Lol_Leagues from './pages/game_pages/LoL/Lol_Leagues'


import Wz_Lan from './pages/game_pages/Warzone/Wz_Lan';
import Wz from './pages/game_pages/Warzone/Wz';
import Wz_headtohead from './pages/game_pages/Warzone/Wz_headtohead';
import Wz_Wagers from './pages/game_pages/Warzone/Wz_Wagers';
import Wz_Leagues from './pages/game_pages/Warzone/Wz_Leagues';

import Val from './pages/game_pages/Valorant/Val';
import Val_headtohead from './pages/game_pages/Valorant/Val_headtohead';
import Val_Leagues from './pages/game_pages/Valorant/Val_Leagues';
import Val_Wagers from './pages/game_pages/Valorant/Val_Wagers';

import Rl from './pages/game_pages/RocketLeague/Rl';
import Rl_headtohead from './pages/game_pages/RocketLeague/Rl_headtohead';
import Rl_Leagues from './pages/game_pages/RocketLeague/Rl_Leagues';
import Rl_Wagers from './pages/game_pages/RocketLeague/Rl_Wagers';


import Verification from './pages/more-pages/Verification';
import Becomeverified from './pages/more-pages/Becomeverified';
import Eventhost from './pages/more-pages/Eventhost';
import Contactus from './pages/more-pages/Contactus';
// All CoD league pages will be imported the same way Snd_league was imported
// All that needs to be changed is the information after the last /
// Change from Snd_league to whatever the filename is
// Also make sure to have the name after import be spelled the exact same as the filename otherwise it will not work
import Snd_league from './pages/game_pages/CoD/leagues/Snd_league';
import NACAL_league from './pages/game_pages/CoD/leagues/NACAL_league';
import './style.css'
//import './pages/more-pages/Verification.css';
//import './pages/more-pages/Eventhost.css';
//import './pages/more-pages/Contactus.css';
//import './pages/Comingsoon.css';
import './pages/more-pages/Verification.css';
import './pages/more-pages/Eventhost.css';
import './pages/more-pages/Contactus.css';
import './pages/Comingsoon.css';

// Different components needed for homepage: Nav bar, on click events for each image + button currently just take to a random page, css (A LOT)


function App() {
  let component;
  console.log(window.location.pathname);
  switch (window.location.pathname) {
    // To create a custom path to implement in the navbar simply hit enter after the last break;
    // type case like all the other cases and create a custom path, for example case "/cxp_league":
    // then for the component have it equal to the league page you imported
    // Finally have a break; after the component, everything should be the same format
    case "/":
      component = <Home />
      break; 
    case "/Comingsoon":
      component = <Comingsoon />
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

    case "/Games":
      component = <Games />
      break;
    case "/Games/call-of-duty":
      component = <Cod />
      break;
    case "/Games/call-of-duty/leagues":
      component = <Cod_Leagues />
      break;
    case "/Games/call-of-duty/lans":
      component = <Cod_Lan />
      break;
    case "/Games/call-of-duty/wagers":
      component = <Cod_Wagers />
      break;
    case "/Games/call-of-duty/head-to-head":
      component = <Cod_headtohead />
      break;

    case "/Games/Halo":
      component = <Halo />
      break;
    case "/Games/Halo/leagues":
      component = <Halo_Leagues />
      break;
    case "/Games/Halo/lans":
      component = <Halo_Lan />
      break;
    case "/Games/Halo/wagers":
      component = <Halo_Wagers />
      break;
    case "/Games/halo/head-to-head":
      component = <Halo_headtohead />
      break;

    case "/Games/LoL":
      component = <LoL />
      break;
    case "/Games/LoL/leagues":
      component = <Lol_Leagues />
      break;
    case "/Games/LoL/lans":
      component = <Lol_Lan />
      break;
    case "/Games/LoL/wagers":
      component = <LoL_Wagers />
      break;
    case "/Games/LoL/head-to-head":
      component = <Lol_headtohead />
      break;

    case "/Games/RocketLeague":
      component = <Rl />
      break;
    case "/Games/RocketLeague/leagues":
      component = <Rl_Leagues />
      break;
    case "/Games/RocketLeague/wagers":
      component = <Rl_Wagers />
      break;
    case "/Games/RocketLeague/head-to-head":
      component = <Rl_headtohead />
      break;

    case "/Games/Valorant":
      component = <Val />
      break;
    case "/Games/Valorant/leagues":
      component = <Val_Leagues />
      break;
    case "/Games/Valorant/wagers":
      component = <Val_Wagers />
      break;
    case "/Games/Valorant/head-to-head":
      component = <Val_headtohead />
      break;

    case "/Games/Warzone":
      component = <Wz />
      break;
    case "/Games/Warzone/leagues":
      component = <Wz_Leagues />
      break;
    case "/Games/Warzone/lans":
      component = <Wz_Lan />
      break;  
    case "/Games/Warzone/wagers":
      component = <Wz_Wagers />
      break;
    case "/Games/Warzone/head-to-head":
      component = <Wz_headtohead />
      break;


    case "/CoD/Tournaments":
      component = <CodTourneys />
      break;
    // case "/test":
    //   component = <Test />
    //   break;        
    case "/Games/call-of-duty/leagues/snd_league":
      component = <Snd_league />
      break;    
    case "/NACAL_league":
      component = <NACAL_league />
      break;


  }

  return (
    <div className="App">
      <Navbar />
      <div>{component}</div>
      
    </div>    
  );
}

export default App;
