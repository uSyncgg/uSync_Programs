import snd_league from '../../../website_images/games/cod/cod-leagues/snd-league-unround.png';
import check from '../../../website_images/games/check-under-image.png';
import './Cod.css';

const Cod_Leagues = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>The SND League</h1>
                                <div className='back-img'>
                                {/* <img src={snd_league} alt="The SND League" className='league-img' /> */}
                                <img src={check} alt="The SND League" className='check2' />
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>The SND League</h1>
                                <div className='back-img'>
                                <img src={check} alt="The SND League" className='check2' />
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>The SND League</h1>
                                <div className='back-img'>
                                {/* <img src={snd_league} alt="The SND League" className='league-img' /> */}
                                <img src={check} alt="The SND League" className='check2' />
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>The SND League</h1>
                                <div className='back-img'>
                                <img src={check} alt="The SND League" className='check2' />
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div> 
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>The SND League</h1>
                                <div className='back-img'>
                                {/* <img src={snd_league} alt="The SND League" className='league-img' /> */}
                                <img src={check} alt="The SND League" className='check2' />
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>The SND League</h1>
                                <div className='back-img'>
                                <img src={check} alt="The SND League" className='check2' />
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

export default Cod_Leagues;