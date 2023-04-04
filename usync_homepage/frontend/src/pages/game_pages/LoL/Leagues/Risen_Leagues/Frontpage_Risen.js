import '../../../CoD/Cod.css';

const Frontpage_Risen = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Champions League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/s5LrZoC"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>Must Qualify</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Divine League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/s5LrZoC"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>800LP Hard cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Dominate League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/s5LrZoC"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>150LP cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Unstoppable League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/s5LrZoC"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>Platinum 1 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Rampage League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/s5LrZoC"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>Gold 1 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Draft League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/s5LrZoC"><img src="https://i.imgur.com/s5LrZoC.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                </div>
                                <p className='Leaguep'>Account Level 100</p>
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

export default Frontpage_Risen;