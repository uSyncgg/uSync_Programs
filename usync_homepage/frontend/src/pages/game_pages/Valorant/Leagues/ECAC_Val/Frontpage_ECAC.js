import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_ECAC = () => {
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
                                <a href='http://localhost:3000/games/Valorant/leagues/ecac-leagues/division-a'>
                                    <h1 className='Leagueh1'>Division A League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/ecac-leagues/division-a"><img src="https://i.imgur.com/VCXkcNL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond - Radiant</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/ecac-leagues/division-a'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/ecac-leagues/division-b'>
                                    <h1 className='Leagueh1'>Division B League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/ecac-leagues/division-b"><img src="https://i.imgur.com/VCXkcNL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold - Platinum</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/ecac-leagues/division-b'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/ecac-leagues/division-c'>
                                    <h1 className='Leagueh1'>Division C League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/ecac-leagues/division-c"><img src="https://i.imgur.com/VCXkcNL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Iron - Silver</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/ecac-leagues/division-c'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                    </div>
                    <div className="league-back-button-container">
              <a href="https://www.usync.gg/games/Valorant/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_ECAC;