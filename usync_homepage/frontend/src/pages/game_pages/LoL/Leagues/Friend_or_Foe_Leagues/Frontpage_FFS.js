import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_FFS = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/UDHxFWg.png" className='Header-Img-l' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/ffs-leagues/mythic'>
                                    <h1 className='Leagueh1'>Mythic League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/ffs-leagues/mythic"><img src="https://i.imgur.com/P3TkWWd.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Diamond 4 AVG</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/ffs-leagues/mythic'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/LoL/leagues/ffs-leagues/heroic'>
                                    <h1 className='Leagueh1'>Heroic League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/LoL/leagues/ffs-leagues/heroic"><img src="https://i.imgur.com/P3TkWWd.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum 1 cap</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/LoL/leagues/ffs-leagues/heroic'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                    </div>
                    <div className="league-back-button-container">
              <a href="https://www.usync.gg/games/LoL/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_FFS;