import '../Game.css';
import Footer from '../../../Footer';

const Rl = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/UjRebiR.png" className='Header-Img-l-rl' />
            </header>

            <div className='Background-game'>
                <div className='container'>
                    <div className='row justify-content-center'> {/* add justify-content-center class to center the columns */}
                        <div className='col-2 offset-3' id='bubblel'>
                            <a href='http://localhost:3000/Comingsoon'>
                                <img src="https://i.imgur.com/5ETdmF8.png" alt="RocketLeague LANs" className='blockimg' /> </a>
                        </div>
                        <div className='col-2' id='bubble'>
                            <a href='http://localhost:3000/Comingsoon'>
                                <img src="https://i.imgur.com/8ZFHAM6.png" alt="RocketLeague Tournaments" className='blockimg' /></a>
                            </div>
                            <div className='col-2' id='bubbler'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues'>
                                    <img src="https://i.imgur.com/C2VoFOV.png" alt="RocketLeague Leagues" className='blockimg' /></a>
                            </div>
                            <div className='col-2 offset-3' id='bubblelb'>
                                <a href='http://localhost:3000/games/RocketLeague/wagers'>
                                    <img src="https://i.imgur.com/ylkoL6L.png" alt="RocketLeague Wagers" className='blockimg' /></a>
                            </div>
                            <div className='col-2' id='bubblerb'>
                                <a href='http://localhost:3000/games/RocketLeague/head-to-head'>
                                    <img src="https://i.imgur.com/vC5N7DW.png" alt="RocketLeague head-to-head" className='blockimg' /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
    );
}

export default Rl;