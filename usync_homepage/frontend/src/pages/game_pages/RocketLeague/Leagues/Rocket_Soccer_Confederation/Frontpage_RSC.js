import '../../../CoD/Cod.css';

const Frontpage_RSC = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/56dTSan.png" className='Header-Img-l' />
                <h2 id="league-title">RSC Leagues</h2>
                <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rsc-leagues/3v3-na'>
                                    <h1 className='Leagueh1'>3v3 NA League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/rsc-leagues/3v3-na"><img src="https://i.imgur.com/HAJTMrA.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Draft Format</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rsc-leagues/3v3-na'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rsc-leagues/3v3-eu'>
                                    <h1 className='Leagueh1'>3v3 EU League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/rsc-leagues/3v3-eu"><img src="https://i.imgur.com/HAJTMrA.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Draft Format</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rsc-leagues/3v3-eu'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rsc-leagues/2v2'>
                                    <h1 className='Leagueh1'>2v2 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/rsc-leagues/2v2"><img src="https://i.imgur.com/HAJTMrA.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Draft Format</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rsc-leagues/2v2'>
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
        </div>
    );
}

export default Frontpage_RSC;