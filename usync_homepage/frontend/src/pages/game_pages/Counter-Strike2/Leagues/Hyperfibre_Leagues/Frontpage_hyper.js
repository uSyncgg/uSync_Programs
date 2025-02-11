import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_hyper = () => {
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
                                <a href='http://localhost:3000/games/CS2/leagues/hyperfibre-leagues/elite'>
                                    <h1 className='Leagueh1'>Elite Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/leagues/hyperfibre-leagues/elite"><img src="https://i.imgur.com/Cx4N8HW.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Competitive</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/leagues/hyperfibre-leagues/elite'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/CS2/leagues/hyperfibre-leagues/social'>
                                    <h1 className='Leagueh1'>Social Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/leagues/hyperfibre-leagues/social"><img src="https://i.imgur.com/Cx4N8HW.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Casual</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/leagues/hyperfibre-leagues/social'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                    </div>
                    <div className="league-back-button-container">
              <a href="https://www.usync.gg/games/CS2/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_hyper;