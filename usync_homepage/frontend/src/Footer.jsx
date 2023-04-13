import styles from './Home.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="/reportproblem" className={styles.reportProblem}>Report a problem</a>
            <div className={styles.footerImages}>
                <a href='https://www.youtube.com/@usyncGG' target='_blank' rel='noopener noreferrer'>
                    <img src="https://i.imgur.com/zlUggwt.png" alt="Youtube" /></a>

                <a href='https://www.instagram.com/usyncgg/'target='_blank' rel='noopener noreferrer'>
                    <img src="https://i.imgur.com/9VJzdPs.png" alt="Instagram" /></a>

                <a href='https://twitter.com/uSyncGG'target='_blank' rel='noopener noreferrer'>
                    <img src="https://i.imgur.com/oS43wb8.png" alt="Twitter" /></a>

                <a href='https://www.gofundme.com/f/uSync-the-hub-for-esport-events'target='_blank' rel='noopener noreferrer'>
                    <img src="https://i.imgur.com/KAhoC36.png" alt="Go Fund Me" /></a>

                <a href='https://www.twitch.tv/usyncgg'target='_blank' rel='noopener noreferrer'>
                    <img src="https://i.imgur.com/xATJ11Q.png" alt="Twitch" /></a>

                <a href='mailto:usyncgg@gmail.com'>
                    <img src="https://i.imgur.com/wSrk5b3.png" alt="Gmail" /></a>

            </div>

            <p className={styles.footer}>
                usyncgg@gmail.com ©2022 by uSync LLC. <a href="/more/contactus" className={styles.contactus}>Contact Us</a> <br />
                All content, game titles, trade names and/or trade dress, trademarks, artworks and associated imagery are <br />
                trademarks and/or copyright material of their respective owners.
            </p>
        </footer>
    );
}

export default Footer;