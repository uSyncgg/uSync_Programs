import '../../../CoD/Cod.css';

const Frontpage_RSC = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>3v3 NA League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/HAJTMrA"><img src="https://i.imgur.com/HAJTMrA.png" className='league-img' /></a>
                                <a href="https://www.usync.gg"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>Draft Format</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>3v3 EU League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/HAJTMrA"><img src="https://i.imgur.com/HAJTMrA.png" className='league-img' /></a>
                                <a href="https://www.usync.gg"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>Draft Format</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />
                                                
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>2v2 League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/HAJTMrA"><img src="https://i.imgur.com/HAJTMrA.png" className='league-img' /></a>
                                <a href="https://www.usync.gg"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>Draft Format</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontpage_RSC;