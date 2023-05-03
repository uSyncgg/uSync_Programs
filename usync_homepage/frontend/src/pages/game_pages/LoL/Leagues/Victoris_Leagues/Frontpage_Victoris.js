import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_Victoris = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/DWyIbm3.png" className='Header-Img-l' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/victoris-leagues/triumph'>
                                    <h1 className='Leagueh1'>Triumph League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/victoris-leagues/triumph"><img src="https://i.imgur.com/uNyPDcU.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Masters cap / One GM</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/victoris-leagues/triumph'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/victoris-leagues/rival'>
                                    <h1 className='Leagueh1'>Rival League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/victoris-leagues/rival"><img src="https://i.imgur.com/RVXeHoL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 4 cap / One Diamond 3</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/victoris-leagues/rival'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/victoris-leagues/amateur'>
                                    <h1 className='Leagueh1'>Amateur League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/victoris-leagues/amateur"><img src="https://i.imgur.com/vpXPc1M.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold 1 cap / One Platinum 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/victoris-leagues/amateur'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/victoris-leagues/rival-draft'>
                                    <h1 className='Leagueh1'>Rival Draft League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/victoris-leagues/rival-draft"><img src="https://i.imgur.com/B0DAPzg.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 3 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/victoris-leagues/rival-draft'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/victoris-leagues/amateur-draft'>
                                    <h1 className='Leagueh1'>Amateur Draft League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/victoris-leagues/amateur-draft"><img src="https://i.imgur.com/PJ1Qjib.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold 1 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/victoris-leagues/amateur-draft'>
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

export default Frontpage_Victoris;