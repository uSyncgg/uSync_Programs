import '../../../CoD/Cod.css';

const Frontpage_MLE = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Premier League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/ydii4DZ"><img src="https://i.imgur.com/ydii4DZ.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1700+ MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Master League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/ydii4DZ"><img src="https://i.imgur.com/ydii4DZ.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1700 MMR cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />
                                                
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Champion League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/ydii4DZ"><img src="https://i.imgur.com/ydii4DZ.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1500 MMR cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Academy League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/ydii4DZ"><img src="https://i.imgur.com/ydii4DZ.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1300 MMR cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Foundation League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/ydii4DZ"><img src="https://i.imgur.com/ydii4DZ.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1100 MMR cap</p>
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

export default Frontpage_MLE;