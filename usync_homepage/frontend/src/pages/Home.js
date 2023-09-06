import { useState } from 'react';
import styles from '../Home.module.css';
import Footer from '../Footer';

const Home = () => {
    return (
      <div>
        <div className={styles.homeContainer}>
          <div className={styles.backgroundTop}>
            <div>
              <img src="https://i.imgur.com/l6mclM4.png" alt="uSync" />
              <h2 className={styles.Intro}>
                World's <u>largest</u> selection of <u>esports</u> LANs, Leagues, and Tournaments<br />
                Find Your Next Event Today<br />
              </h2>
            </div>
            <div>
              <a href="http://localhost:3000/games">
                {" "}
                <button type="submit" className={styles.getStarted}>
                  Get Started
                </button>
              </a>
            </div>
            <h2 className={styles.Slogan}>We Sync so uSync</h2>
          </div>
          <div class={styles.backgroundMid}>
            <h2 className={styles.hometitles}>Explore Events</h2>
            <img
              className="underline-h"
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
            />
            <div className={styles.backgroundImages}>
              <a href="http://localhost:3000/games/halo">
                <img
                  src="https://i.imgur.com/wqKJfEu.png"
                  alt="Halo Infinite"
                  className="home-games-images"
                />
              </a>
              <a href="http://localhost:3000/games/call-of-duty">
                <img
                  src="https://i.imgur.com/CsoQufa.png"
                  alt="Modern Warfare 2"
                  className="home-games-images"
                />
              </a>
              <a href="http://localhost:3000/games/warzone">
                <img
                  src="https://i.imgur.com/BIs3u5h.png"
                  alt="Warzone 2"
                  className="home-games-images"
                />
              </a>
              <a href="http://localhost:3000/games/LoL">
                <img
                  src="https://i.imgur.com/5riYNow.png"
                  alt="League of Legends"
                  className="home-games-images"
                />
              </a>
              <a href="http://localhost:3000/games/RocketLeague">
                <img
                  src="https://i.imgur.com/GJO8JIZ.png"
                  alt="Rocket League"
                  className="home-games-images"
                />
              </a>

              <a href="http://localhost:3000/games/Valorant">
                <img
                  src="https://i.imgur.com/Gsl3oIp.png"
                  alt="Valorant"
                  className="home-games-images"
                />
              </a>
            </div>

            <div className={styles.hr}></div>

            <h2 className={styles.hometitles}>LAN Events</h2>
            <img
              className="underline-h"
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
            />
            <iframe
              className={styles.Map}
              src="https://www.google.com/maps/d/u/6/embed?mid=1QrCfeXFSyZJMXLzUeAiIWy0hcWgaJVg&ehbc=2E312F"
              width="640"
              height="480"
            ></iframe>
            <h3 className={styles.learnhow}>
              Learn how to post your LAN to the map{" "}
              <a href="/more/eventhost" className={styles.eventhost}>
                here
              </a>
            </h3>
            <br />
            <div className={styles.hr}></div>

            <h2 className={styles.hometitles}>Coming Soon!</h2>
            <img
              className="underline-h"
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
            />

            <div className={styles.backgroundImages}>
              <a href="http://localhost:3000/Comingsoon">
                <img src="https://i.imgur.com/MUcaqmt.png" alt="Apex Legends" />{" "}
              </a>

              <a href="http://localhost:3000/Comingsoon">
                <img
                  src="https://i.imgur.com/qpQDtRJ.png"
                  alt="Super Smash Brothers"
                />
              </a>

              <a href="http://localhost:3000/Comingsoon">
                <img src="https://i.imgur.com/XxOYZiE.png" alt="Overwatch 2" />
              </a>
            </div>
            <br />
            <div className={styles.hr}></div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Home;
