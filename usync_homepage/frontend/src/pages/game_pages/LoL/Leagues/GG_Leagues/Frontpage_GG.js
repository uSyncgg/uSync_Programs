import '../../../CoD/Cod.css';

const Frontpage_GG = () => {
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
                                <a href='PLACE LINK HERE'>
                                    <h1 className='Leagueh1'>Division A League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="https://imgur.com/hs7swgq"><img src="https://i.imgur.com/hs7swgq.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>By Rank</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='PLACE LINK HERE'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='PLACE LINK HERE'>
                                    <h1 className='Leagueh1'>Division B League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="https://imgur.com/hs7swgq"><img src="https://i.imgur.com/hs7swgq.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>By Rank</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='PLACE LINK HERE'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='PLACE LINK HERE'>
                                    <h1 className='Leagueh1'>Division C League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="https://imgur.com/hs7swgq"><img src="https://i.imgur.com/hs7swgq.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>By Rank</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='PLACE LINK HERE'>
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

export default Frontpage_GG;