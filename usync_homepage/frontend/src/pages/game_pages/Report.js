import styles from '../../Home.module.css';
import './CoD/Cod.css';




const Report = () => {
    return(
<div>
            <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/eSKIOA4.png" className='Header-Img-l' />
                <h2 id="league-title">uSync Titles</h2>
                <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
            </header>

 <div className='Background-leagues'>

<div class={styles.backgroundMid}>
<div className={styles.backgroundImages}>
    <a href='http://localhost:3000/Report/halo'>
        <img src="https://i.imgur.com/wqKJfEu.png" alt="Halo Infinite" height="12.5rem" width="12.5rem" />
    </a>
    <a href='http://localhost:3000/Report/call-of-duty'>
        <img src="https://i.imgur.com/CsoQufa.png" alt="Modern Warfare 2" height="12.5rem" width="12.5rem" />
    </a>
    <a href='http://localhost:3000/Report/warzone'>
        <img src="https://i.imgur.com/BIs3u5h.png" alt="Warzone 2" height="12.5rem" width="12.5rem" />
    </a>
    <a href='http://localhost:3000/Report/LoL'>
        <img src="https://i.imgur.com/5riYNow.png" alt="League of Legends" height="12.5rem" width="12.5rem" />
    </a>
    <br />
    <br />
    <a href='http://localhost:3000/Report/RocketLeague'>
        <img src="https://i.imgur.com/GJO8JIZ.png" alt="Rocket League" height="12.5rem" width="12.5rem" />
    </a>
    <a href='http://localhost:3000/Report/Valorant'>
        <img src="https://i.imgur.com/Gsl3oIp.png" alt="Valorant" height="12.5rem" width="12.5rem" />
    </a>
    <hr />
    </div>
    </div>
</div>
<footer className={styles.footer}>
                    <a href="/" className={styles.reportProblem}>Report a problem</a>
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

    )
}
export default Report;