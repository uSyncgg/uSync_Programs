import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_LAS = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/DWyIbm3.png" className='Header-Img-l' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/las-leagues/tier-1'>
                                    <h1 className='Leagueh1'>Tier 1 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/las-leagues/tier-1"><img src="https://i.imgur.com/0xe76Iu.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum 1 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/las-leagues/tier-1'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/las-leagues/tier-2'>
                                    <h1 className='Leagueh1'>Tier 2 League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/las-leagues/tier-2"><img src="https://i.imgur.com/0xe76Iu.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold 1 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/las-leagues/tier-2'>
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

export default Frontpage_LAS;