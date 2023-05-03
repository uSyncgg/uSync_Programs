import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_Cobalt = () => {
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
                                <a href='http://localhost:3000/games/LoL/leagues/cobalt-winds-leagues/division1'>
                                    <h1 className='Leagueh1'>Division 1 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/cobalt-winds-leagues/division1"><img src="https://i.imgur.com/sMnBEnL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 4 - Masters AVG</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/cobalt-winds-leagues/division1'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/cobalt-winds-leagues/division2'>
                                    <h1 className='Leagueh1'>Division 2 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/cobalt-winds-leagues/division2"><img src="https://i.imgur.com/sMnBEnL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 4 - Platinum 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/cobalt-winds-leagues/division2'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/cobalt-winds-leagues/division3'>
                                    <h1 className='Leagueh1'>Division 3 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/cobalt-winds-leagues/division3"><img src="https://i.imgur.com/sMnBEnL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum 4 - Gold 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/cobalt-winds-leagues/division3'>
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

export default Frontpage_Cobalt;