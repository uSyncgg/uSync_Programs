import { useState } from 'react';
import styles from '../Home.module.css';
import letter_logo from '../website_images/home-images/letter_logo.png';
import short_underline from '../website_images/home-images/short_underline.png';
import halo from '../website_images/home-images/halo_banner.png';
import mw2 from '../website_images/home-images/mw2_banner.png';
import wz from '../website_images/home-images/warzone_banner.png';
import lol from '../website_images/home-images/lol_banner.png';
import rl from '../website_images/home-images/rl_banner.png';
import val from '../website_images/home-images/val_banner.png';
import apex from '../website_images/home-images/apex_banner.png';
import smash from '../website_images/home-images/smash_banner.png';
import ow from '../website_images/home-images/ow_banner.png';
import yt from '../website_images/home-images/youtube.png';
import gmail from '../website_images/home-images/gmail.png';
import gfm from '../website_images/home-images/gofundme.png';
import ig from '../website_images/home-images/instagram.png';
import twitter from '../website_images/home-images/twitter.png';
import twitch from '../website_images/home-images/twitch.png';

const Home = () => {
    return (
        <div>
            <div className={styles.backgroundTop}>
                <div>
                    <img src={letter_logo} alt="uSync" width="100px" />
                    <h2 className="Intro">Finding esports competitions is challenging. We <br />
                        make finding competition for each game not only <br />
                        simple, but all in one place.</h2>
                </div>
                <div>
                    <button type="submit" className='btn btn-block'>Get Started</button>
                </div>
                <h2 class="Slogan">We Sync so uSync</h2>
            </div>

            <div class={styles.backgroundMid}>
                <h2 id="">Supported Titles</h2>
                <img src={short_underline} alt="underline" width="500px" />

                <div className={styles.backgroundImages}>
                    <img src={halo} alt="Halo Infinite" height="200px" width="200px" />
                    <img src={mw2} alt="Modern Warfare 2" height="200px" width="200px" />
                    <img src={wz} alt="Warzone 2" height="200px" width="200px" />
                    <img src={lol} alt="League of Legends" height="200px" width="200px" />
                    <br />
                    <br />
                    <img src={rl} alt="Rocket League" height="200px" width="200px" />
                    <img src={val} alt="Valorant" height="200px" width="200px" />
                    <hr />
                </div>

                <h2 className={styles.Intro}>LAN Events</h2>
                <img src={short_underline} alt="underline" width="500px" />
                <iframe src="https://www.google.com/maps/d/u/6/embed?mid=1QrCfeXFSyZJMXLzUeAiIWy0hcWgaJVg&ehbc=2E312F" width="640" height="480"></iframe>
                <h3 className={styles.Intro}>Learn how to post your LAN to the map </h3>

                <h2 className={styles.Intro}>Coming Soon!</h2>
                <img src={short_underline} alt="underline" width="500px" />

                <div className={styles.comingSoonGames}>
                    <img src={apex} alt="Apex Legends" height="200px" width="200px" />
                    <img src={smash} alt="Super Smash Brothers" height="200px" width="200px" />
                    <img src={ow} alt="Overwatch 2" height="200px" width="200px" />
                </div>
            </div>

            <div className={styles.backgroundBottom}>
                <footer>
                    <h3>Report a problem</h3>
                    <div className={styles.footer}>
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

export default Home;
