import '../../../CoD/Cod.css';

const Frontpage_LPL = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/qHQ7VK3.png" className='Header-Img-l' />
                <h2 id="league-title">LPL Leagues</h2>
                <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/lpl-leagues/open'>
                                    <h1 className='Leagueh1'>Open Division League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/lpl-leagues/open"><img src="https://i.imgur.com/rlmiEc2.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Any Rank</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/lpl-leagues/open'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/lpl-leagues/amateur'>
                                    <h1 className='Leagueh1'>Amateur Division League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/lpl-leagues/amateur"><img src="https://i.imgur.com/rlmiEc2.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>By Rank</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/lpl-leagues/amateur'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/lpl-leagues/evolution'>
                                    <h1 className='Leagueh1'>Evolution Division League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/lpl-leagues/evolution"><img src="https://i.imgur.com/rlmiEc2.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>By Rank</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/lpl-leagues/evolution'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <a href='https://www.usync.gg/games/Valorant/leagues'>
                        <button className='back-button'>Back</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontpage_LPL;