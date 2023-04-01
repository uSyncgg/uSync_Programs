import '../../../CoD/Cod.css';

const Frontpage_Doubles = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Elite League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/JRaBjWV"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1600 - 1799 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Star League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/JRaBjWV"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1400 - 1599 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />
                                                
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Expert League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/JRaBjWV"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1200 - 1399 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Adept League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/JRaBjWV"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1000 - 1199 MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />
                      
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Origin League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/JRaBjWV"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>0 - 999 MMR</p>
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

export default Frontpage_Doubles;