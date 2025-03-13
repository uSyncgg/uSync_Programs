import '../CoD/Cod.css'
import Footer from '../../../Footer';
const Halo_Wagers = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/1Kelw3D.png" className='Header-Img-l' />
                <div className="games-leagues-header-title">
                    <h2 id="league-title">Wagers</h2>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
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
                                    <a href="http://localhost:3000/games/halo/wagers/cmg"><img src="https://i.imgur.com/QKP5L9N.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
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
                                    <a href="http://localhost:3000/games/halo/wagers/oneup"><img src="https://i.imgur.com/wkSz5Le.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='http://localhost:3000/games/halo/wagers/oneup'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/halo/wagers/esport-wagers'>
                                    <h1 className='Leagueh1'>Ewagers</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/halo/wagers/esport-wagers"><img src="https://i.imgur.com/FAg32lR.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                <a href='http://localhost:3000/games/halo/wagers/esport-wagers'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Halo_Wagers;