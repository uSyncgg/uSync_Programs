import 'bootstrap/dist/css/bootstrap.css';
import './playground.css';
import { useEffect } from 'react';
import $ from 'jquery';

const navbarLogo = new URL("./website_images/home-images/usync-navbar-logo.png", import.meta.url)


function Playground() {

  const location = window.location.pathname;  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/"><img src={navbarLogo} alt="uSync Logo" id="usync-nav-logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className="collapse navbar-collapse navbar-total-container" id="navbarNav">
        <ul className="navbar-nav">
          {/* <li className={`nav-item ${location === '/' ? 'active' : ''}`}>
            <a className="nav-link" href="/">Home</a>
          </li> */}
          <li className={`nav-item dropdown ${(location.startsWith('/games') && !location.includes('/leagues') && !location.includes('/Tournaments') && !location.includes('/lans'))? 'active' : ''}`}>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Games
            </a>
            <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
              <a className={`dropdown-item ${location === '/games/call-of-duty' ? 'active' : ''}`} href="/games/call-of-duty">Call of Duty</a>
              <a className={`dropdown-item ${location === '/games/warzone' ? 'active' : ''}`} href="/games/warzone">Warzone 2.0</a>
              <a className={`dropdown-item ${location === '/games/LoL' ? 'active' : ''}`} href="/games/LoL">League of Legends</a>
              <a className={`dropdown-item ${location === '/games/halo' ? 'active' : ''}`} href="/games/halo">Halo</a>
              <a className={`dropdown-item ${location === '/games/RocketLeague' ? 'active' : ''}`} href="/games/RocketLeague">Rocket League</a>
              <a className={`dropdown-item ${location === '/games/Valorant' ? 'active' : ''}`} href="/games/Valorant">Valorant</a>
            </div>
          </li>
          <li className={`nav-item dropdown ${location.includes('/lans') ? 'active' : ''}`}>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              LANs
            </a>
            <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
              <a className={`dropdown-item ${location === '/games/call-of-duty/lans' ? 'active' : ''}`} href="/games/call-of-duty/lans">Call of Duty</a>
              <a className={`dropdown-item ${location === '/games/warzone/lans' ? 'active' : ''}`} href="/games/warzone/lans">Warzone 2.0</a>
              <a className={`dropdown-item ${location === '/games/LoL/lans' ? 'active' : ''}`} href="/games/LoL/lans">League of Legends</a>
              <a className={`dropdown-item ${location === '/games/halo/lans' ? 'active' : ''}`} href="/games/halo/lans">Halo</a>
              {/*<a className={`dropdown-item ${location === '/games/RocketLeague/lans' ? 'active' : ''}`} href="/games/RocketLeague/lans">Rocket League</a>
              <a className={`dropdown-item ${location === '/games/Valorant/lans' ? 'active' : ''}`} href="/games/Valorant/lans">Valorant</a>*/}
            </div>
          </li>
          <li className={`nav-item dropdown ${location.includes('/leagues') ? 'active' : ''}`}>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Leagues
            </a>
            <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
              <a className={`dropdown-item ${location === '/games/call-of-duty/leagues' ? 'active' : ''}`} href="/games/call-of-duty/leagues">Call of Duty</a>
              <a className={`dropdown-item ${location === '/games/warzone/leagues' ? 'active' : ''}`} href="/games/warzone/leagues">Warzone 2.0</a>
              <a className={`dropdown-item ${location === '/games/LoL/leagues' ? 'active' : ''}`} href="/games/LoL/leagues">League of Legends</a>
              <a className={`dropdown-item ${location === '/games/halo/leagues' ? 'active' : ''}`} href="/games/halo/leagues">Halo</a>
              <a className={`dropdown-item ${location === '/games/RocketLeague/leagues' ? 'active' : ''}`} href="/games/RocketLeague/leagues">Rocket League</a>
              <a className={`dropdown-item ${location === '/games/Valorant/leagues' ? 'active' : ''}`} href="/games/Valorant/leagues">Valorant</a>
            </div>
          </li>
          <li className={`nav-item dropdown ${location.includes('/Tournaments') ? 'active' : ''}`}>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tournaments
            </a>
            <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
              <a className={`dropdown-item ${location === '/CoD/Tournaments' ? 'active' : ''}`} href="/CoD/Tournaments">Call of Duty</a>
              {/*<a className={`dropdown-item ${location === '/games/warzone' ? 'active' : ''}`} href="/games/warzone">Warzone 2.0</a>
              <a className={`dropdown-item ${location === '/games/LoL' ? 'active' : ''}`} href="/games/LoL">League of Legends</a>
              <a className={`dropdown-item ${location === '/games/halo' ? 'active' : ''}`} href="/games/halo">Halo</a>
              <a className={`dropdown-item ${location === '/games/RocketLeague' ? 'active' : ''}`} href="/games/RocketLeague">Rocket League</a>
  <a className={`dropdown-item ${location === '/games/Valorant' ? 'active' : ''}`} href="/games/Valorant">Valorant</a> */}
            </div>
          </li>
          <li className={`nav-item ${location === '/Comingsoon' ? 'active' : ''}`}>
            <a className="nav-link" href="/Comingsoon">Coming Soon</a>
          </li>
          <li className={`nav-item dropdown ${location.startsWith('/more') ? 'active' : ''}`}>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              More
            </a>
            <div className="dropdown-menu bg-dark more-dropdown-container" aria-labelledby="navbarDropdownMenuLink">
              <a className={`dropdown-item ${location === '/more/verification' ? 'active' : ''}`} href="/more/verification">Verification</a>
              <a className={`dropdown-item ${location === '/more/eventhost' ? 'active' : ''}`} href="/more/eventhost">Event Host</a>
              <a className={`dropdown-item ${location === '/more/contactus' ? 'active' : ''}`} href="/more/contactus">Contact Us</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Playground;