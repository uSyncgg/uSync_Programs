import '../../../CoD/Cod.css';

const Frontpage_RLPC = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Major League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/kVDfckC"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                <a href="https://www.usync.gg"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>1752 MMR & Above</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Triple A League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/kVDfckC"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                <a href="https://www.usync.gg"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>1587-1751 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />
                                                
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Double A League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/kVDfckC"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                <a href="https://www.usync.gg"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>1495-1586 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Single A League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/kVDfckC"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                <a href="https://www.usync.gg"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>1361-1494 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Independent League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/kVDfckC"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                <a href="https://www.usync.gg"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>1000-1360 MMR</p>
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

export default Frontpage_RLPC;