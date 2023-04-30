import 'bootstrap/dist/css/bootstrap.css';
import './playground.css';
import { useLocation } from 'react-router-dom';

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
          <li className={`nav-item ${location === '/' ? 'active' : ''}`}>
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className={`nav-item dropdown ${location.startsWith('/games') ? 'active' : ''}`}>
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