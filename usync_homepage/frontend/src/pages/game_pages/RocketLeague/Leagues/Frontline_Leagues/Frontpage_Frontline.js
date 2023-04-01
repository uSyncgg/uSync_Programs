import '../../../CoD/Cod.css';

const Frontpage_Frontline = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Champ League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/pjxLzXe"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1875+ MMR</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Vanguard League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/pjxLzXe"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1874 MMR cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />
                                                
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Challenger League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/pjxLzXe"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1574 MMR cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Prospect League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/pjxLzXe"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                <a href="https://imgur.com/0MPIBOK"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>1349 MMR and Lower</p>
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

export default Frontpage_Frontline;