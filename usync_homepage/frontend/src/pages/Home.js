import { useState } from 'react';
import styles from '../Home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.backgroundTop}>
                <div>
                    <img src="https://i.imgur.com/NzC8oX2.png" alt="uSync" />
                    <h2 className={styles.Intro}>
                        Finding <u>esports</u> competitions is challenging. We <br />
                        make finding competition for each game not only <br />
                        <u>simple</u>, but <u>all in one place</u>.
                    </h2>


                </div>
                <div>
                    <a href="http://localhost:3000/games"> <button type="submit" className={styles.getStarted}>Get Started</button> 
                    </a>
                </div>
                <h2 className={styles.Slogan}>We Sync so uSync</h2>
            </div>

            <div class={styles.backgroundMid}>
                <h2 className={styles.hometitles}>Supported Titles</h2>
                <img className={styles.underline} src="https://i.imgur.com/eNhKhTI.png" alt="underline" width="31.25rem" />

                <div className={styles.backgroundImages}>
                    <a href='http://localhost:3000/games/halo'>
                        <img src="https://i.imgur.com/wqKJfEu.png" alt="Halo Infinite" height="12.5rem" width="12.5rem" />
                    </a>
                    <a href='http://localhost:3000/games/call-of-duty'>
                        <img src="https://i.imgur.com/CsoQufa.png" alt="Modern Warfare 2" height="12.5rem" width="12.5rem" />
                    </a>
                    <a href='http://localhost:3000/games/warzone'>
                        <img src="https://i.imgur.com/BIs3u5h.png" alt="Warzone 2" height="12.5rem" width="12.5rem" />
                    </a>
                    <a href='http://localhost:3000/games/LoL'>
                        <img src="https://i.imgur.com/5riYNow.png" alt="League of Legends" height="12.5rem" width="12.5rem" />
                    </a>
                    <br />
                    <br />
                    <a href='http://localhost:3000/games/RocketLeague'>
                        <img src="https://i.imgur.com/GJO8JIZ.png" alt="Rocket League" height="12.5rem" width="12.5rem" />
                    </a>
                    <a href='http://localhost:3000/games/Valorant'>
                        <img src="https://i.imgur.com/Gsl3oIp.png" alt="Valorant" height="12.5rem" width="12.5rem" />
                    </a>
                    <hr />
                </div>

                <h2 className={styles.hometitles}>LAN Events</h2>
                <img className={styles.underline} src="https://i.imgur.com/eNhKhTI.png" alt="underline" width="31.25rem" />
                <iframe className={styles.Map} src="https://www.google.com/maps/d/u/6/embed?mid=1QrCfeXFSyZJMXLzUeAiIWy0hcWgaJVg&ehbc=2E312F" width="640" height="480"></iframe>
                <h3 className={styles.learnhow}>Learn how to post your LAN to the map <a href="/more/eventhost" className={styles.eventhost}>here</a></h3>
                <br />
                <hr />


                <h2 className={styles.hometitles}>Coming Soon!</h2>
                <img className={styles.underline} src="https://i.imgur.com/eNhKhTI.png" alt="underline" width="31.25rem" />

                <div className={styles.backgroundImages}>
                    <a href='http://localhost:3000/Comingsoon'>
                        <img src="https://i.imgur.com/MUcaqmt.png" alt="Apex Legends" height="12.5rem" width="12.5rem" /> </a>

                    <a href='http://localhost:3000/Comingsoon'>
                        <img src="https://i.imgur.com/qpQDtRJ.png" alt="Super Smash Brothers" height="12.5rem" width="12.5rem" /></a>

                    <a href='http://localhost:3000/Comingsoon'>
                        <img src="https://i.imgur.com/XxOYZiE.png" alt="Overwatch 2" height="12.5rem" width="12.5rem" /></a>
                </div>
                <br />
                <hr />
                <br />
                <br />
                <br />
                <br />
            </div>
            <div>
                <footer className={styles.footer}>
                    <a href="/reportproblem" className={styles.reportProblem}>Report a problem</a>
                    <div className={styles.footerImages}>
                        <a href='https://www.youtube.com/@usyncGG'>
                            <img src="https://i.imgur.com/zlUggwt.png" alt="Youtube"/></a>

                        <a href='https://www.instagram.com/usyncgg/'>
                            <img src="https://i.imgur.com/9VJzdPs.png" alt="Instagram"/></a>

                        <a href='https://twitter.com/uSyncGG'>
                            <img src="https://i.imgur.com/oS43wb8.png" alt="Twitter"/></a>

                        <a href='https://www.gofundme.com/f/uSync-the-hub-for-esport-events'>
                            <img src="https://i.imgur.com/KAhoC36.png" alt="Go Fund Me"/></a>

                        <a href='https://www.twitch.tv/usyncgg'>
                            <img src="https://i.imgur.com/xATJ11Q.png" alt="Twitch"/></a>

                        <a href='mailto:usyncgg@gmail.com'>
                            <img src="https://i.imgur.com/wSrk5b3.png" alt="Gmail"/></a>

                    </div>

                    <p className={styles.footer}>
                        usyncgg@gmail.com ©2022 by uSync LLC. <a href="/more/contactus" className={styles.contactus}>Contact Us</a> <br />
                        All content, game titles, trade names and/or trade dress, trademarks, artworks and associated imagery are <br />
                        trademarks and/or copyright material of their respective owners.
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default Home;
