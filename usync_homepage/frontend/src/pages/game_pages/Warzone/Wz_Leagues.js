import '../CoD/Cod.css'
import Footer from '../../../Footer';
const Wz_Leagues = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/eEbGfFG.png" className='Header-Img-l' />
                <h2 id="league-title">Warzone Leagues</h2>
                <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/warzone/leagues/cgn'>
                                    <h1 className='Leagueh1'>Contender Gaming Network</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/warzone/leagues/cgn"><img src="https://i.imgur.com/j8aBZUK.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/warzone/leagues/cgn'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/warzone/leagues/ehub'>
                                    <h1 className='Leagueh1'>The Esports Hub</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/warzone/leagues/ehub"><img src="https://i.imgur.com/Hgv2WwN.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA/EU</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/warzone/leagues/ehub'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/warzone/leagues/gg-gaming'>
                                    <h1 className='Leagueh1'>GG Gaming League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/warzone/leagues/gg-gaming"><img src="https://i.imgur.com/2MzFYVs.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/warzone/leagues/gg-gaming'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/warzone/leagues/ghml'>
                                    <h1 className='Leagueh1'>GMHL Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/warzone/leagues/ghml"><img src="https://i.imgur.com/hDF13fh.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/warzone/leagues/ghml'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/warzone/leagues/ccl'>
                                    <h1 className='Leagueh1'>College Warzone</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/warzone/leagues/ccl"><img src="https://i.imgur.com/71EePEn.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/warzone/leagues/ccl'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/warzone/leagues/njcaae'>
                                    <h1 className='Leagueh1'>NJCAAE</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/warzone/leagues/njcaae"><img src="https://i.imgur.com/Yer31Qr.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/warzone/leagues/njcaae'>
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

export default Wz_Leagues;