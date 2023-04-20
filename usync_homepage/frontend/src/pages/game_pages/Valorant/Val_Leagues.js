import '../CoD/Cod.css'
import Footer from '../../../Footer';
const Val_Leagues = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/B7IhozX.png" className='Header-Img-l' />
                <h2 id="league-title">Valorant Leagues</h2>
                <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/victoris-leagues'>
                                    <h1 className='Leagueh1'>Victoris Leagues</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/victoris-leagues"><img src="https://i.imgur.com/34aS7tl.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/victoris-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/lpl-leagues'>
                                    <h1 className='Leagueh1'>LPL Leagues</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/lpl-leagues"><img src="https://i.imgur.com/rlmiEc2.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>OCE</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/lpl-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/frontline-leagues'>
                                    <h1 className='Leagueh1'>Team Frontline League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/frontline-leagues"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/frontline-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/scottish-esports'>
                                    <h1 className='Leagueh1'>Scottish Esports League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/scottish-esports"><img src="https://i.imgur.com/VAurqdv.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>EU</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/scottish-esports'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/unified'>
                                    <h1 className='Leagueh1'>Unified Premier League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/unified"><img src="https://i.imgur.com/KDf5r2a.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/unified'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/vct-game-changers'>
                                    <h1 className='Leagueh1'>VCT Game Changers</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/vct-game-changers"><img src="https://i.imgur.com/TJdbPmz.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/vct-game-changers'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/cgn-league'>
                                    <h1 className='Leagueh1'>CGN League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/cgn-league"><img src="https://i.imgur.com/8h5GWaO.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/cgn-league'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/vmaster'>
                                    <h1 className='Leagueh1'>VMaster League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/vmaster"><img src="https://i.imgur.com/PAZu639.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>ES</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/vmaster'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/talent-league'>
                                    <h1 className='Leagueh1'>Talent League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/talent-league"><img src="https://i.imgur.com/vLKklOa.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>EU</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/talent-league'>
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
                                <a href='http://localhost:3000/games/Valorant/leagues/riot'>
                                    <h1 className='Leagueh1'>College Valorant League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/riot"><img src="https://i.imgur.com/1Hqgxu0.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/riot'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/ugc-college'>
                                    <h1 className='Leagueh1'>UGC Battle Academy</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/ugc-college"><img src="https://i.imgur.com/SVdtnVw.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/ugc-college'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/ecac-leagues'>
                                    <h1 className='Leagueh1'>ECAC Esports</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/ecac-leagues"><img src="https://i.imgur.com/VCXkcNL.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/ecac-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/njcaae'>
                                    <h1 className='Leagueh1'>NJCAAE</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/njcaae"><img src="https://i.imgur.com/Yer31Qr.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/njcaae'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/necc'>
                                    <h1 className='Leagueh1'>NECC</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/necc"><img src="https://i.imgur.com/wUMekqz.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/necc'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/opse'>
                                    <h1 className='Leagueh1'>OPSE</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/opse"><img src="https://i.imgur.com/vk4JMG4.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>Ontario</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/opse'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/egfc'>
                                    <h1 className='Leagueh1'>EGFC League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/egfc"><img src="https://i.imgur.com/3DTxejo.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/egfc'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/hbcu'>
                                    <h1 className='Leagueh1'>HBCU Esports League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/hbcu"><img src="https://i.imgur.com/b3AwOjm.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/hbcu'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/nace-leagues'>
                                    <h1 className='Leagueh1'>NACE Starleague</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/nace-leagues"><img src="https://i.imgur.com/QYYAzjq.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/nace-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/csmg'>
                                    <h1 className='Leagueh1'>CSMG League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/csmg"><img src="https://i.imgur.com/2EsJOXo.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/csmg'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div>                        
                        <p className='hr' />
                        <h2 id="league-title1">High School Leagues</h2>                        
                        <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h1'/>
                        <p className='hr' />
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/hsel'>
                                    <h1 className='Leagueh1'>High School Esports League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/hsel"><img src="https://i.imgur.com/fYpPNR1.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/hsel'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/tec'>
                                    <h1 className='Leagueh1'>The Esports Company League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/tec"><img src="https://i.imgur.com/FZeLamS.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/tec'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/vantagg'>
                                    <h1 className='Leagueh1'>VantaGG</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/vantagg"><img src="https://i.imgur.com/4Lv3iRp.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/vantagg'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/nasef'>
                                    <h1 className='Leagueh1'>NASEF League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/nasef"><img src="https://i.imgur.com/x0SaVuR.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/nasef'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/necl'>
                                    <h1 className='Leagueh1'>NECL League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/necl"><img src="https://i.imgur.com/wJRs1Vl.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/necl'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/egfh'>
                                    <h1 className='Leagueh1'>EGFH League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/egfh"><img src="https://i.imgur.com/3DTxejo.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/egfh'>
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

export default Val_Leagues;