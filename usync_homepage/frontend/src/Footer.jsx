import styles from './Home.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="/reportproblem" className={styles.reportProblem}>Report a problem</a>
            <div className={styles.footerImages}>
                <a href='https://www.youtube.com/@usyncGG' target='_blank' rel='noopener noreferrer'>
                    <img src="https://i.imgur.com/BgGzaKS.png" alt="Youtube" /></a>

                <a href='https://www.instagram.com/usyncgg/?next=%2F'target='_blank' rel='noopener noreferrer'>
                    <img src="https://i.imgur.com/YOav7r1.png" alt="Instagram" /></a>

                <a href='https://twitter.com/uSyncGG'target='_blank' rel='noopener noreferrer'>
                    <img src="https://i.imgur.com/YhpeqKK.png" alt="Twitter" /></a>

                <a href='https://www.gofundme.com/f/uSync-the-hub-for-esport-events'target='_blank' rel='noopener noreferrer'>
                    <img src="https://i.imgur.com/td1tEmS.png" alt="Go Fund Me" /></a>

                <a href='https://www.twitch.tv/usyncgg'target='_blank' rel='noopener noreferrer'>
                    <img src="https://i.imgur.com/ds8ZvJJ.png" alt="Twitch" /></a>

                <a href='mailto:usyncgg@gmail.com'>
                    <img src="https://i.imgur.com/EzZRrgd.png" alt="Gmail" /></a>

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