import '../../../CoD/Cod.css';

const Frontpage_ECAC = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Division A League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/VCXkcNL"><img src="https://i.imgur.com/VCXkcNL.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond - Radiant</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Division B League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/VCXkcNL"><img src="https://i.imgur.com/VCXkcNL.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold - Platinum</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Division C League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/VCXkcNL"><img src="https://i.imgur.com/VCXkcNL.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Iron - Silver</p>
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

export default Frontpage_ECAC;