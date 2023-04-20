import '../CoD/Cod.css'
import Footer from '../../../Footer';
const Halo_Leagues = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/aWT4Lye.png" className='Header-Img-l' />
                <h2 id="league-title">Halo Leagues</h2>
                <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/halo/leagues/halo-agent'>
                                    <h1 className='Leagueh1'>Halo Agent</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/halo/leagues/halo-agent"><img src="https://i.imgur.com/bHzfdu8.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/halo/leagues/halo-agent'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/halo/leagues/halo-rec-league'>
                                    <h1 className='Leagueh1'>Halo Rec League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/halo/leagues/halo-rec-league"><img src="https://i.imgur.com/6cA46YH.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/halo/leagues/halo-rec-league'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/halo/leagues/corporate-halo'>
                                    <h1 className='Leagueh1'>Corporate Halo League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/halo/leagues/corporate-halo"><img src="https://i.imgur.com/k63mdno.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/halo/leagues/corporate-halo'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div>
                        <p className='hr' />
                        <h2 id="league-title1">Collegiate Leagues</h2>                        
                        <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h1'/>
                        <p className='hr' />
                        </div>
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/halo/leagues/ugc-halo'>
                                    <h1 className='Leagueh1'>UGC College Halo</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/halo/leagues/ugc-halo"><img src="https://i.imgur.com/9y6gCDV.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/halo/leagues/ugc-halo'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/halo/leagues/ecac'>
                                    <h1 className='Leagueh1'>ECAC Esports</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/halo/leagues/ecac"><img src="https://i.imgur.com/VCXkcNL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/halo/leagues/ecac'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/halo/leagues/college-halo'>
                                    <h1 className='Leagueh1'>College Halo</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/halo/leagues/college-halo"><img src="https://i.imgur.com/SnE3px8.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/halo/leagues/college-halo'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/halo/leagues/necc'>
                                    <h1 className='Leagueh1'>NECC</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/halo/leagues/necc"><img src="https://i.imgur.com/wUMekqz.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/halo/leagues/necc'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/halo/leagues/nacl'>
                                    <h1 className='Leagueh1'>NACL</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/halo/leagues/nacl"><img src="https://i.imgur.com/JjHrrLk.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/halo/leagues/nacl'>
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

export default Halo_Leagues;