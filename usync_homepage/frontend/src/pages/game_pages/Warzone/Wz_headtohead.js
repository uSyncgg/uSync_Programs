import '../CoD/Cod.css';
import Footer from '../../../Footer';
const Wz_headtohead = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/gn7pkRM.png" className='Header-Img-l' />
                <h2 id="league-title">Head-to-Head</h2>
                <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/warzone/head-to-head/cmg'>
                                    <h1 className='Leagueh1'>Checkmate Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/warzone/head-to-head/cmg"><img src="https://i.imgur.com/e9CIHsR.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/warzone/head-to-head/cmg'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/warzone/head-to-head/gb'>
                                    <h1 className='Leagueh1'>GameBattles</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/warzone/head-to-head/gb"><img src="https://i.imgur.com/ZOixRAL.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/warzone/head-to-head/gb'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/warzone/head-to-head/umg'>
                                    <h1 className='Leagueh1'>UMG Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/warzone/head-to-head/umg"><img src="https://i.imgur.com/vaZcGzo.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/warzone/head-to-head/umg'>
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

export default Wz_headtohead;