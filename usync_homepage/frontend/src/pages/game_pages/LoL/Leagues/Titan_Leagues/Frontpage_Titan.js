import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_Titan = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/UdgQpu1.png" className='Header-Img-l' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/titan-leagues/conqueror'>
                                    <h1 className='Leagueh1'>Conqueror League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/titan-leagues/conqueror"><img src="https://i.imgur.com/F8QKxEp.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 4 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/titan-leagues/conqueror'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/titan-leagues/divinity'>
                                    <h1 className='Leagueh1'>Divinity League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/titan-leagues/divinity"><img src="https://i.imgur.com/j4M1YOn.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum 4 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/titan-leagues/divinity'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <a href='https://www.usync.gg/games/LoL/leagues'>
                        <button className='back-button'>Back</button>
                    </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_Titan;