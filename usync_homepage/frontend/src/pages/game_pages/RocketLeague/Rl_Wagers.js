import '../CoD/Cod.css';

const Rl_Wagers = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Drop-In Gaming</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/78DWiv0"><img src="https://i.imgur.com/78DWiv0.png" className='league-img'/></a> 
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Checkmate Gaming</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/e9CIHsR"><img src="https://i.imgur.com/e9CIHsR.png" className='league-img'/></a> 
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                        
                            </div> 
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>GamerSaloon</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/w6Q1t32"><img src="https://i.imgur.com/w6Q1t32.png" className='league-img'/></a> 
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Stakester (App)</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/wl5JqGy"><img src="https://i.imgur.com/wl5JqGy.png" className='league-img'/></a> 
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                <p className='Leaguep'></p>
                                </div>
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

export default Rl_Wagers;