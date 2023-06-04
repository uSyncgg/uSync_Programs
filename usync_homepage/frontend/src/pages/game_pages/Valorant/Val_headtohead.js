import '../CoD/Cod.css';
import Footer from '../../../Footer';
const Val_headtohead = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/lw7RZun.png" className='Header-Img-l' />
                <div className="games-leagues-header-title">
                    <h2 id="league-title">Head-to-Head</h2>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/head-to-head/gankster'>
                                    <h1 className='Leagueh1'>Gankster GG</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/head-to-head/gankster"><img src="https://i.imgur.com/jDiKD74.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/head-to-head/gankster'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/head-to-head/esport-scrim'>
                                    <h1 className='Leagueh1'>Esport Scrim</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/head-to-head/esport-scrim"><img src="https://i.imgur.com/T2IA9mL.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/head-to-head/esport-scrim'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/head-to-head/dropingaming'>
                                    <h1 className='Leagueh1'>Drop-In Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/head-to-head/dropingaming"><img src="https://i.imgur.com/78DWiv0.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/head-to-head/dropingaming'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/head-to-head/college-hub'>
                                    <h1 className='Leagueh1'>Collegiate Valorant Hub Scrims</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/head-to-head/college-hub"><img src="https://i.imgur.com/wAHYH2Q.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/head-to-head/college-hub'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/head-to-head/project-v'>
                                    <h1 className='Leagueh1'>Project V League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/head-to-head/project-v"><img src="https://i.imgur.com/lDPgnzb.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/head-to-head/project-v'>
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

export default Val_headtohead;