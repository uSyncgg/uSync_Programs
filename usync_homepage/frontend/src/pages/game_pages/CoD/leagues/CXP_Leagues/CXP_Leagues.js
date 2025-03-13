import '../../Cod.css';
import Footer from '../../../../../Footer';
const CXP_Leagues = () => {
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
                                <a href='http://localhost:3000/games/call-of-duty/leagues/cxp-leagues/cxp-varsity'>
                                    <h1 className='Leagueh1'>Varsity Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/leagues/cxp-leagues/cxp-varsity"><img src="https://i.imgur.com/jGdqqOZ.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='http://localhost:3000/games/call-of-duty/leagues/cxp-leagues/cxp-varsity'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/call-of-duty/leagues/cxp-leagues/cxp-open'>
                                    <h1 className='Leagueh1'>Open Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/leagues/cxp-leagues/cxp-open"><img src="https://i.imgur.com/jGdqqOZ.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='http://localhost:3000/games/call-of-duty/leagues/cxp-leagues/cxp-open'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/call-of-duty/leagues/cxp-leagues/cxp-club'>
                                    <h1 className='Leagueh1'>Club Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/leagues/cxp-leagues/cxp-club"><img src="https://i.imgur.com/jGdqqOZ.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                <a href='http://localhost:3000/games/call-of-duty/leagues/cxp-leagues/cxp-club'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className='hr' />

                    <div className="league-back-button-container">
              <a href="https://www.usync.gg/games/call-of-duty/leagues">
                <button className="back-button">Back</button>
              </a>
            </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default CXP_Leagues;