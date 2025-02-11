import '../CoD/Cod.css'
import Footer from '../../../Footer';
const CS2_headtohead = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/JU7dWGw.png" className='Header-Img-l' />
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
                                <a href='http://localhost:3000/games/CS2/head-to-head/faceit'>
                                    <h1 className='Leagueh1'>FACEIT</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/head-to-head/faceit"><img src="https://i.imgur.com/4GwagUk.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/head-to-head/faceit'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/CS2/head-to-head/pracc'>
                                    <h1 className='Leagueh1'>Pracc</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/head-to-head/pracc"><img src="https://i.imgur.com/XERVRrh.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/head-to-head/pracc'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/CS2/head-to-head/esport-scrim'>
                                    <h1 className='Leagueh1'>Esport Scrim</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/head-to-head/esport-scrim"><img src="https://i.imgur.com/KIPClg9.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/head-to-head/esport-scrim'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/CS2/head-to-head/ckras'>
                                    <h1 className='Leagueh1'>CKRAS</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/head-to-head/ckras"><img src="https://i.imgur.com/ry9oAAw.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/head-to-head/ckras'>
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

export default CS2_headtohead;