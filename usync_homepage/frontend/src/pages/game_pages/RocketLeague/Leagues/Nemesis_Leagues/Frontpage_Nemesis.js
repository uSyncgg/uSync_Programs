import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_Nemesis = () => {
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
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/titan'>
                                    <h1 className='Leagueh1'>Titan League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/titan"><img src="https://i.imgur.com/PcmcLLk.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1720+ MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/titan'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/rival'>
                                    <h1 className='Leagueh1'>Rival League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/rival"><img src="https://i.imgur.com/PcmcLLk.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1585-1719 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/rival'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/challenger'>
                                    <h1 className='Leagueh1'>Challenger League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/challenger"><img src="https://i.imgur.com/PcmcLLk.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1470-1584 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/challenger'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/prospect'>
                                    <h1 className='Leagueh1'>Prospect League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/prospect"><img src="https://i.imgur.com/PcmcLLk.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1295-1469 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/prospect'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/novice'>
                                    <h1 className='Leagueh1'>Novice League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/novice"><img src="https://i.imgur.com/PcmcLLk.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1000-1294 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues/novice'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <a href='https://www.usync.gg/games/RocketLeague/leagues'>
                        <button className='back-button'>Back</button>
                    </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_Nemesis;