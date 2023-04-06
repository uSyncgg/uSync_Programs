import '../../../CoD/Cod.css';

const Frontpage_Risen = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/Rpkj9TA.png" className='Header-Img-l' />
                <h2 id="league-title">Risen Leagues</h2>
                <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/risen-leagues/champions'>
                                    <h1 className='Leagueh1'>Champions League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/risen-leagues/champions"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Must Qualify</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/risen-leagues/champions'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/risen-leagues/divine'>
                                    <h1 className='Leagueh1'>Divine League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/risen-leagues/divine"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>800LP Hard cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/risen-leagues/divine'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/risen-leagues/dominate'>
                                    <h1 className='Leagueh1'>Dominate League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/risen-leagues/dominate"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>150LP cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/risen-leagues/dominate'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/risen-leagues/unstoppable'>
                                    <h1 className='Leagueh1'>Unstoppable League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/risen-leagues/unstoppable"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum 1 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/risen-leagues/unstoppable'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/risen-leagues/rampage'>
                                    <h1 className='Leagueh1'>Rampage League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/risen-leagues/rampage"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold 1 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/risen-leagues/rampage'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/risen-leagues/draft'>
                                    <h1 className='Leagueh1'>Draft League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/risen-leagues/draft"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Account Level 100</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/risen-leagues/draft'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <a href='https://www.usync.gg/games/LoL/leagues'>
                        <button className='back-button'>Back</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontpage_Risen;