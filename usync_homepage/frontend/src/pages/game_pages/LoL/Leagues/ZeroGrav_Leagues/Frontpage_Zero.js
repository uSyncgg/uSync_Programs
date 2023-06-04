import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_Zero = () => {
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
                                <a href='http://localhost:3000/games/LoL/leagues/zerograv-leagues/platinum'>
                                    <h1 className='Leagueh1'>Platinum League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/zerograv-leagues/platinum"><img src="https://i.imgur.com/dVTPZlO.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum 1 cap / One Diamond 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/zerograv-leagues/platinum'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/zerograv-leagues/gold'>
                                    <h1 className='Leagueh1'>Gold League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/zerograv-leagues/gold"><img src="https://i.imgur.com/dVTPZlO.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold 1 cap / One Platinum 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/zerograv-leagues/gold'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/zerograv-leagues/ibs'>
                                    <h1 className='Leagueh1'>IBS League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/zerograv-leagues/ibs"><img src="https://i.imgur.com/dVTPZlO.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Silver 1 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/zerograv-leagues/ibs'>
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

export default Frontpage_Zero;