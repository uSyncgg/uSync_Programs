import '../../../CoD/Cod.css';

const Frontpage_Victoris = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Triumph League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/uNyPDcU"><img src="https://i.imgur.com/uNyPDcU.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Masters cap / One GM</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Rival League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/RVXeHoL"><img src="https://i.imgur.com/RVXeHoL.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 4 cap / One Diamond 3</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Amateur League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/vpXPc1M"><img src="https://i.imgur.com/vpXPc1M.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold 1 cap / One Platinum 4</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Rival Draft League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/B0DAPzg"><img src="https://i.imgur.com/B0DAPzg.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 3 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Amateur Draft League</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/PJ1Qjib"><img src="https://i.imgur.com/PJ1Qjib.png" className='league-img' /></a>
                                <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold 1 cap</p>
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

export default Frontpage_Victoris;