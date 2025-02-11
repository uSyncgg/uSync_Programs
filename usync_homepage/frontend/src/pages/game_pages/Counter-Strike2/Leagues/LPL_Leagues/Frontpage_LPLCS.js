import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_LPLCS = () => {
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
                                <a href='http://localhost:3000/games/CS2/leagues/lpl-leagues/lpl-gold'>
                                    <h1 className='Leagueh1'>Gold Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/leagues/lpl-leagues/lpl-gold"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Invite-Only</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/leagues/lpl-leagues/lpl-gold'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/CS2/leagues/lpl-leagues/lpl-silver'>
                                    <h1 className='Leagueh1'>Silver Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/leagues/lpl-leagues/lpl-silver"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Invite-Only</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/leagues/lpl-leagues/lpl-silver'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/CS2/leagues/lpl-leagues/lpl-bronze'>
                                    <h1 className='Leagueh1'>Bronze Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/leagues/lpl-leagues/lpl-bronze"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Qualified Teams</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/leagues/lpl-leagues/lpl-bronze'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/CS2/leagues/lpl-leagues/lpl-open'>
                                    <h1 className='Leagueh1'>Open Division</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/leagues/lpl-leagues/lpl-open"><img src="https://i.imgur.com/bqbNpmT.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Open</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/leagues/lpl-leagues/lpl-open'>
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

export default Frontpage_LPLCS;