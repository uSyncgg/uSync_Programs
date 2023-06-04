import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_DUO = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/UDHxFWg.png" className='Header-Img-l' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/duo-esports-league/gpcs'>
                                    <h1 className='Leagueh1'>GPCS League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/duo-esports-league/gpcs"><img src="https://i.imgur.com/zIngCsR.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum 1 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/duo-esports-league/gpcs'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/duo-esports-league/ibsgcs'>
                                    <h1 className='Leagueh1'>IBSGCS League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/duo-esports-league/ibsgcs"><img src="https://i.imgur.com/zIngCsR.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold 1 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/duo-esports-league/ibsgcs'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                    </div>
                    <div className="league-back-button-container">
              <a href="https://www.usync.gg/games/LoL/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_DUO;