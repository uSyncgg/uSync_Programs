import '../CoD/Cod.css';

const Rl_headtohead = () => {
    return(
        <div>

            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>Gankster GG</h1>
                                <div className='parent'>
                                <a href="https://imgur.com/wIi3tlA"><img src="https://i.imgur.com/wIi3tlA.png" className='league-img'/></a> 
                                <a href="https://www.usync.gg"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img'/></a>
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

export default Rl_headtohead;