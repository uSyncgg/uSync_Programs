import '../../Cod.css';

const HOE_Leagues = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Masters League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/47wczZC"><img src="https://i.imgur.com/47wczZC.png" className='league-img'/></a> 
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Challengers League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/47wczZC"><img src="https://i.imgur.com/47wczZC.png" className='league-img'/></a> 
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Amateurs League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/47wczZC"><img src="https://i.imgur.com/47wczZC.png" className='league-img'/></a> 
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Cross-Play League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/47wczZC"><img src="https://i.imgur.com/47wczZC.png" className='league-img'/></a> 
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
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

export default HOE_Leagues;