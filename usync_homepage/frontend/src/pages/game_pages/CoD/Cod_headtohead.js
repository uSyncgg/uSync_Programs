import './Cod.css';

const Cod_headtohead = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Checkmate Gaming</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/e9CIHsR"><img src="https://i.imgur.com/e9CIHsR.png" className='league-img'/></a> 
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>GameBattles</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/ZOixRAL"><img src="https://i.imgur.com/ZOixRAL.png" className='league-img'/></a> 
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
                                <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>The Arena</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/7Rl32A7"><img src="https://i.imgur.com/7Rl32A7.png" className='league-img'/></a> 
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>UMG Gaming</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/vaZcGzo"><img src="https://i.imgur.com/vaZcGzo.png" className='league-img'/></a> 
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
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

export default Cod_headtohead;