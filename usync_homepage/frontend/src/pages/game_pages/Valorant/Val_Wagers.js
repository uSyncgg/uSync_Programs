import '../CoD/Cod.css';
import Footer from '../../../Footer';
const Val_Wagers = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/wPewMB4.png" className='Header-Img-l' />
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
                                <a href='http://localhost:3000/games/Valorant/wagers/dropingaming'>
                                    <h1 className='Leagueh1'>Drop-In Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/wagers/dropingaming"><img src="https://i.imgur.com/78DWiv0.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/wagers/dropingaming'>
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

export default Val_Wagers;