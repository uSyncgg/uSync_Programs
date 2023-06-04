import '../../Cod.css';
import Footer from '../../../../../Footer';
const HOE_Leagues = () => {
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
                                <a href='http://localhost:3000/games/call-of-duty/leagues/House-of-esports-leagues/hoe-masters'>
                                    <h1 className='Leagueh1'>Masters League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/leagues/House-of-esports-leagues/hoe-masters"><img src="https://i.imgur.com/47wczZC.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                <a href='http://localhost:3000/games/call-of-duty/leagues/House-of-esports-leagues/hoe-masters'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/call-of-duty/leagues/House-of-esports-leagues/hoe-challengers'>
                                    <h1 className='Leagueh1'>Challengers League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/leagues/House-of-esports-leagues/hoe-challengers"><img src="https://i.imgur.com/47wczZC.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/call-of-duty/leagues/House-of-esports-leagues/hoe-challengers'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/call-of-duty/leagues/House-of-esports-leagues/hoe-amateur'>
                                    <h1 className='Leagueh1'>Amateurs League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/leagues/House-of-esports-leagues/hoe-amateur"><img src="https://i.imgur.com/47wczZC.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/call-of-duty/leagues/House-of-esports-leagues/hoe-amateur'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    </div>
                    <div className="league-back-button-container">
              <a href="https://www.usync.gg/games/call-of-duty/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default HOE_Leagues;