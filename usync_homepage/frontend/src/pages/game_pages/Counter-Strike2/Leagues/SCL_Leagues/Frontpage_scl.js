import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_scl = () => {
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
                                <a href='http://localhost:3000/games/CS2/leagues/scl-leagues/challenger'>
                                    <h1 className='Leagueh1'>Challenger Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/leagues/scl-leagues/challenger"><img src="https://i.imgur.com/b6fSddr.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Highest Division</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/leagues/scl-leagues/challenger'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/CS2/leagues/scl-leagues/masters'>
                                    <h1 className='Leagueh1'>Masters Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/leagues/scl-leagues/masters"><img src="https://i.imgur.com/b6fSddr.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>High-Tier Division</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/leagues/scl-leagues/masters'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/CS2/leagues/scl-leagues/intermediate'>
                                    <h1 className='Leagueh1'>Intermediate Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/leagues/scl-leagues/intermediate"><img src="https://i.imgur.com/b6fSddr.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Mid-Tier Division</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/leagues/scl-leagues/intermediate'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/CS2/leagues/scl-leagues/public'>
                                    <h1 className='Leagueh1'>Public Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/leagues/scl-leagues/public"><img src="https://i.imgur.com/b6fSddr.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Open Division</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/leagues/scl-leagues/public'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />
                    </div>
                    <div className="league-back-button-container">
              <a href="https://www.usync.gg/games/CS2/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_scl;