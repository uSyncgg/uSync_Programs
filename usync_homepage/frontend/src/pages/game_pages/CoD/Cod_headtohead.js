import './Cod.css'
import Footer from '../../../Footer';
const Cod_headtohead = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/8Psf9G6.png" className='Header-Img-l' />
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
                                <a href='http://localhost:3000/games/call-of-duty/head-to-head/cmg'>
                                    <h1 className='Leagueh1'>Checkmate Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/head-to-head/cmg"><img src="https://i.imgur.com/e9CIHsR.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/call-of-duty/head-to-head/cmg'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/call-of-duty/head-to-head/gb'>
                                    <h1 className='Leagueh1'>GameBattles</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/head-to-head/gb"><img src="https://i.imgur.com/ZOixRAL.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/call-of-duty/head-to-head/gb'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/call-of-duty/head-to-head/arena'>
                                    <h1 className='Leagueh1'>The Arena</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/head-to-head/arena"><img src="https://i.imgur.com/7Rl32A7.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/call-of-duty/head-to-head/arena'>
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

export default Cod_headtohead;