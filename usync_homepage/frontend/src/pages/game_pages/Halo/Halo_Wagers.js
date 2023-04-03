import '../CoD/Cod.css';

const Halo_Wagers = () => {
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
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>One Up (App)</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/ExuRlsG"><img src="https://i.imgur.com/ExuRlsG.png" className='league-img'/></a> 
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
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

export default Halo_Wagers;