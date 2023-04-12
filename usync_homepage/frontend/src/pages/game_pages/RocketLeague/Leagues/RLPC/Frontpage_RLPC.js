import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_RLPC = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/S3G558E.png" className='Header-Img-l' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/major'>
                                    <h1 className='Leagueh1'>Major League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/major"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1752 MMR & Above</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/major'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/aaa'>
                                    <h1 className='Leagueh1'>Triple A League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/aaa"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1587-1751 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/aaa'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/aa'>
                                    <h1 className='Leagueh1'>Double A League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/aa"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1495-1586 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/aa'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/a'>
                                    <h1 className='Leagueh1'>Single A League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/a"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1361-1494 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/a'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/independent'>
                                    <h1 className='Leagueh1'>Independent League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/independent"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1000-1360 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues/independent'>
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

export default Frontpage_RLPC;