import '../CoD/Cod.css'

const Halo_Wagers = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/wPewMB4.png" className='Header-Img-l' />
                <h2 id="league-title">Wagers</h2>
                <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/halo/wagers/cmg'>
                                    <h1 className='Leagueh1'>Checkmate Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/halo/wagers/cmg"><img src="https://i.imgur.com/e9CIHsR.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/halo/wagers/cmg'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/halo/wagers/oneup'>
                                    <h1 className='Leagueh1'>One Up (App)</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/halo/wagers/oneup"><img src="https://i.imgur.com/ExuRlsG.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/halo/wagers/oneup'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
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