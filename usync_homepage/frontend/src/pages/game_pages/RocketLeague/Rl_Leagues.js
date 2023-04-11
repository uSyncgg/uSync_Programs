import '../CoD/Cod.css'

const Rl_Leagues = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/fp6OvWK.png" className='Header-Img-l' />
                <h2 id="league-title-lol">Rocket League Leagues</h2>
                <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h-lol' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues'>
                                    <h1 className='Leagueh1'>RLPC</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues"><img src="https://i.imgur.com/kVDfckC.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rlpc-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nitro-league'>
                                    <h1 className='Leagueh1'>Nitro League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/nitro-league"><img src="https://i.imgur.com/v5aUnNs.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>DACH</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nitro-league'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rsc-leagues'>
                                    <h1 className='Leagueh1'>Rocket Soccar Confederation Leagues</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/rsc-leagues"><img src="https://i.imgur.com/HAJTMrA.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA/EU</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/rsc-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/frontline-leagues'>
                                    <h1 className='Leagueh1'>Team Frontline Leagues</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/frontline-leagues"><img src="https://i.imgur.com/pjxLzXe.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/frontline-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/url-leagues'>
                                    <h1 className='Leagueh1'>Ultimate Rocket Leagues</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/url-leagues"><img src="https://i.imgur.com/MAt6qsf.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/url-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/mle-leagues'>
                                    <h1 className='Leagueh1'>Minor League Esports</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/mle-leagues"><img src="https://i.imgur.com/ydii4DZ.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>All Regions</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/mle-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/elite-series'>
                                    <h1 className='Leagueh1'>Elite Series League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/elite-series"><img src="https://i.imgur.com/P0msGqt.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Benelux</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/elite-series'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/united-rogue'>
                                    <h1 className='Leagueh1'>United Rogue League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/united-rogue"><img src="https://i.imgur.com/jWphxcz.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/united-rogue'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/italian-leagues'>
                                    <h1 className='Leagueh1'>Italian Rocket Champ Leagues</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/italian-leagues"><img src="https://i.imgur.com/VjsPbnv.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>ITL</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/italian-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues'>
                                    <h1 className='Leagueh1'>Nemesis League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues"><img src="https://i.imgur.com/PcmcLLk.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nemesis-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/raket-ligaen'>
                                    <h1 className='Leagueh1'>Raket Ligaen</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/raket-ligaen"><img src="https://i.imgur.com/dTZMWkR.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>DK</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/raket-ligaen'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/scottish-esports'>
                                    <h1 className='Leagueh1'>Scottish Esports League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/scottish-esports"><img src="https://i.imgur.com/VAurqdv.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>EU</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/scottish-esports'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/blue-bird'>
                                    <h1 className='Leagueh1'>Blue Bird Rivals Circuit</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/blue-bird"><img src="https://i.imgur.com/ZjxR1yM.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>OCE</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/blue-bird'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/master-cup'>
                                    <h1 className='Leagueh1'>Master Cup XP League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/master-cup"><img src="https://i.imgur.com/PA0ZQ0Z.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>EU</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/master-cup'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/frontier-doubles-leagues'>
                                    <h1 className='Leagueh1'>Frontier Doubles League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/frontier-doubles-leagues"><img src="https://i.imgur.com/JRaBjWV.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/frontier-doubles-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/oce-leagues'>
                                    <h1 className='Leagueh1'>OCE Draft League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/oce-leagues"><img src="https://i.imgur.com/NxauxTy.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>OCE</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/oce-leagues'>
                                    <button type="submit" className='info-button'>All Leagues</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/cca'>
                                    <h1 className='Leagueh1'>College Carball Association</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/cca"><img src="https://i.imgur.com/UqFxQ9Q.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/cca'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nace'>
                                    <h1 className='Leagueh1'>NACE Starleague</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/nace"><img src="https://i.imgur.com/QYYAzjq.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nace'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/ecac'>
                                    <h1 className='Leagueh1'>ECAC Esports</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/ecac"><img src="https://i.imgur.com/VCXkcNL.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/ecac'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/ugc'>
                                    <h1 className='Leagueh1'>UGC Battle Academy</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/ugc"><img src="https://i.imgur.com/SVdtnVw.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/ugc'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/necc'>
                                    <h1 className='Leagueh1'>NECC</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/necc"><img src="https://i.imgur.com/wUMekqz.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/necc'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/opse'>
                                    <h1 className='Leagueh1'>OPSE</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/opse"><img src="https://i.imgur.com/vk4JMG4.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Ontario</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/opse'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/csmg'>
                                    <h1 className='Leagueh1'>CSMG League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/csmg"><img src="https://i.imgur.com/2EsJOXo.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/csmg'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/egfc'>
                                    <h1 className='Leagueh1'>EGFC League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/egfc"><img src="https://i.imgur.com/3DTxejo.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/egfc'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/hbcu'>
                                    <h1 className='Leagueh1'>HBCU Esports League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/hbcu"><img src="https://i.imgur.com/b3AwOjm.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/hbcu'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/hsel'>
                                    <h1 className='Leagueh1'>High School Esports League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/hsel"><img src="https://i.imgur.com/fYpPNR1.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/hsel'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/playvs'>
                                    <h1 className='Leagueh1'>PlayVS</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/playvs"><img src="https://i.imgur.com/dj20PCp.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/playvs'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/tec'>
                                    <h1 className='Leagueh1'>The Esports Company League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/tec"><img src="https://i.imgur.com/FZeLamS.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/tec'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/vantagg'>
                                    <h1 className='Leagueh1'>VantaGG</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/vantagg"><img src="https://i.imgur.com/4Lv3iRp.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/vantagg'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/ugc-hs'>
                                    <h1 className='Leagueh1'>UGC HS Battle Academy</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/ugc-hs"><img src="https://i.imgur.com/SVdtnVw.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/ugc-hs'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/necl'>
                                    <h1 className='Leagueh1'>NECL League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/necl"><img src="https://i.imgur.com/wJRs1Vl.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/necl'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nasef'>
                                    <h1 className='Leagueh1'>NASEF League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/nasef"><img src="https://i.imgur.com/x0SaVuR.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nasef'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/egfh'>
                                    <h1 className='Leagueh1'>EGFH League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/egfh"><img src="https://i.imgur.com/3DTxejo.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>USA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/egfh'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nacl'>
                                    <h1 className='Leagueh1'>NACL</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/RocketLeague/leagues/nacl"><img src="https://i.imgur.com/JjHrrLk.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" title="NOT Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>NA</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/RocketLeague/leagues/nacl'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Rl_Leagues;