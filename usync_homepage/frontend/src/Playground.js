import 'bootstrap/dist/css/bootstrap.css';
import './playground.css';
import { useState } from 'react';

const navbarLogo = new URL("./website_images/home-images/usync-navbar-logo.png", import.meta.url)


function Playground() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"><img src={navbarLogo} alt="uSync Logo" id="usync-nav-logo" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class="collapse navbar-collapse navbar-total-container" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Games
            </a>
            <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/games/call-of-duty">Call of Duty</a>
              <a class="dropdown-item" href="/games/warzone">Warzone 2.0</a>
              <a class="dropdown-item" href="/games/LoL">League of Legends</a>
              <a class="dropdown-item" href="/games/halo">Halo</a>
              <a class="dropdown-item" href="/games/RocketLeague">Rocket League</a>
              <a class="dropdown-item" href="/games/Valorant">Valorant</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Comingsoon">Coming Soon</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              More
            </a>
            <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/more/verification">Verification</a>
              <a class="dropdown-item" href="/more/eventhost">Event Host</a>
              <a class="dropdown-item" href="/more/contactus">Contact Us</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Playground;