import '../Info.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Footer';
import styles from '../Home.module.css';

const Comingsoon = () => {
    return (
        <div>
            <body id='league-body2'>
                <header>
                        <img src="https://i.imgur.com/0Wrn8wp.png" className='Header-Img' />
                </header>
                <div className='Background-mid-contact'>
                    <div>
                    <h1 className='event-title-contactus'>Game Titles</h1>
                        <img src="https://i.imgur.com/eNhKhTI.png" className='Underline-h-verification-coming' />
                    </div>
                    <div className={styles.backgroundImg}>
                    <a href='http://localhost:3000/Comingsoon'>
                        <img src="https://i.imgur.com/MUcaqmt.png" alt="Apex Legends"/> </a>

                    <a href='http://localhost:3000/Comingsoon'>
                        <img src="https://i.imgur.com/qpQDtRJ.png" alt="Super Smash Brothers"/></a>

                    <a href='http://localhost:3000/Comingsoon'>
                        <img src="https://i.imgur.com/XxOYZiE.png" alt="Overwatch 2"/></a>
                </div>

                    <div className='container'>
                        <div className='row' id='verif-row'>
                            <div className='col-8 offset-2'>
                                <h1 className='coming-soon-text'>We are actively working on different titles in order to bring the best competition to you. These take time due to the 
                                competitive scenes varying from title to title. Your continued use of our services allow for us to keep working on new titles for the future. Thank you!</h1>
                                <h1 className='event-title-coming'>Event Types</h1>
                                <h1 className='info-title-coming2'>We are looking to provide a list of daily tournaments from all of the varying sites so that players don't have to move 
                                from site to site to find what they are looking for. Eventually, we will have EVERY tournament in the world posted on uSync, just give us some time!</h1>
                        <img src="https://i.imgur.com/eNhKhTI.png" className='Underline-h-coming' />
                            </div>
                            <div className='col-2' id='bubble-coming'>
                                <img src="https://i.imgur.com/8ZFHAM6.png" alt="RocketLeague Tournaments" className='blockimg' />
                                
                            </div>

                        </div>
                    </div>

                </div>
            </body>
            <Footer />
        </div>

    );
}
export default Comingsoon;

