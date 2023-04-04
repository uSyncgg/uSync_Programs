import '../../../CoD/Cod.css';

const Frontpage_LCS = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Executive League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/lPFfJL9"><img src="https://i.imgur.com/lPFfJL9.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 3 AVG / Two GM+</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Financial League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/lPFfJL9"><img src="https://i.imgur.com/lPFfJL9.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum 3 AVG / One Diamond 3</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Commercial League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/lPFfJL9"><img src="https://i.imgur.com/lPFfJL9.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold 1 AVG</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Economy League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/lPFfJL9"><img src="https://i.imgur.com/lPFfJL9.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Silver 1 AVG</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontpage_LCS;