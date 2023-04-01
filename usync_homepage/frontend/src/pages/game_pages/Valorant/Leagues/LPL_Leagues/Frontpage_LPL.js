import '../../../CoD/Cod.css';

const Frontpage_LPL = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Open Division League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/rlmiEc2"><img src="https://i.imgur.com/rlmiEc2.png" className='league-img' /></a>
                                <a href="https://www.usync.gg"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>Any Rank</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Amateur Division League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/rlmiEc2"><img src="https://i.imgur.com/rlmiEc2.png" className='league-img' /></a>
                                <a href="https://www.usync.gg"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>By Rank</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Evolution Division League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/rlmiEc2"><img src="https://i.imgur.com/rlmiEc2.png" className='league-img' /></a>
                                <a href="https://www.usync.gg"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>By Rank</p>
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

export default Frontpage_LPL;