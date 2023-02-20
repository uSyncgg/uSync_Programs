import { useState } from 'react';
import './App.css';
import letter_logo from './website_images/letter_logo.png';
import short_underline from './website_images/short_underline.png';
import halo from './website_images/halo_banner.png';
import mw2 from './website_images/mw2_banner.png';
import wz from './website_images/warzone_banner.png';
import lol from './website_images/lol_banner.png';
import rl from './website_images/rl_banner.png';
import val from './website_images/val_banner.png';
import apex from './website_images/apex_banner.png';
import smash from './website_images/smash_banner.png';
import ow from './website_images/ow_banner.png';
import yt from './website_images/youtube.png';
import gmail from './website_images/gmail.png';
import gfm from './website_images/gofundme.png';
import ig from './website_images/instagram.png';
import twitter from './website_images/twitter.png';
import twitch from './website_images/twitch.png';

// Different components needed for homepage: Nav bar, on click events for each image + button currently just take to a random page, css (A LOT)


function App() {
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

    <div>
      <div class="Background-top">
        <div>
          <img src={letter_logo} alt="uSync" width="100px" />
          <h2 class="Intro">Finding esports competitions is challenging. We <br />
            make finding competition for each game not only <br />
            simple, but all in one place.</h2>
        </div>
        <div>
          <button type="submit" className='btn btn-block'>Get Started</button>
        </div>
        <h2 class="Slogan">We Sync so uSync</h2>
      </div>

      <div class="Background-mid">
        <h2 class="Intro">Supported Titles</h2>
        <img src={short_underline} alt="underline" width="500px" />

        <div>
          <img src={halo} alt="Halo Infinite" height="200px" width="200px" />
          <img src={mw2} alt="Modern Warfare 2" height="200px" width="200px" />
          <img src={wz} alt="Warzone 2" height="200px" width="200px" />
          <img src={lol} alt="League of Legends" height="200px" width="200px" />
          <br />
          <img src={rl} alt="Rocket League" height="200px" width="200px" />
          <img src={val} alt="Valorant" height="200px" width="200px" />
        </div>

        <h2 class="Intro">LAN Events</h2>
        <img src={short_underline} alt="underline" width="500px" />

        <h3 class="Intro">Learn how to post your LAN to the map </h3>

        <h2 class="Intro">Coming Soon!</h2>
        <img src={short_underline} alt="underline" width="500px" />

        <div>
          <img src={apex} alt="Apex Legends" height="200px" width="200px" />
          <img src={smash} alt="Super Smash Brothers" height="200px" width="200px" />
          <img src={ow} alt="Overwatch 2" height="200px" width="200px" />
        </div>
      </div>

      <div class="Background-bottom">
        <footer>
          <h3>Report a problem</h3>
          <div>
            <img src={yt} alt="Youtube" height="50px" width="50px" />
            <img src={ig} alt="Instagram" height="50px" width="50px" />
            <img src={twitter} alt="Twitter" height="50px" width="50px" />
            <img src={gfm} alt="Go Fund Me" height="50px" width="50px" />
            <img src={twitch} alt="Twitch" height="50px" width="50px" />
            <img src={gmail} alt="Gmail" height="50px" width="50px" />
          </div>

          <p> 
          usyncgg@gmail.com ©2022 by uSync LLC. link contact us <br />
          All content, game titles, trade names and/or trade dress, trademarks, artworks and associated imagery are <br />
          trademarks and/or copyright material of their respective owners.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
