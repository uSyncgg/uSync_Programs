import '../../../CoD/Cod.css';

const Frontpage_Doubles = () => {
    return (
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='PLACE LINK HERE'>
                                    <h1 className='Leagueh1'>Elite League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="https://imgur.com/JRaBjWV"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1600 - 1799 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='PLACE LINK HERE'>
                                    <a href='PLACE LINK HERE'>
                                        <button type="submit" className='info-button'>More Info</button>
                                    </a>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='PLACE LINK HERE'>
                                    <h1 className='Leagueh1'>Star League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="https://imgur.com/JRaBjWV"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1400 - 1599 MMR</p>
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
                                    <h1 className='Leagueh1'>Expert League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="https://imgur.com/JRaBjWV"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1200 - 1399 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='PLACE LINK HERE'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='PLACE LINK HERE'>
                                    <h1 className='Leagueh1'>Origin League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="https://imgur.com/JRaBjWV"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>0 - 1199 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='PLACE LINK HERE'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontpage_Doubles;