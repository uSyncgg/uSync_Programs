import '../CoD/Cod.css'
import Footer from '../../../Footer';
const CS2_Leagues = () => {
    return (
      <div>
        <header id="League-header">
          <img src="https://i.imgur.com/uzLeW90.png" className="Header-Img-l" />
          <div className="games-leagues-header-title">
            <h2 id="league-title-lol">Counter-Strike 2 Leagues</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h-lol"
            />
          </div>
        </header>
        <div className="Background-leagues">
          <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/faceitesea">
                    <h1 className="Leagueh1">FACEIT ESEA</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/faceitesea">
                      <img
                        src="https://i.imgur.com/STmx1Aa.png"
                        className="league-img"
                      />
                    </a>
                    <a href="https://www.usync.gg/more/verification">
                      <img
                        src="https://i.imgur.com/PCHIHQB.png"
                        title="uSync Verified"
                        className="over-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">Available Worldwide</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/faceitesea">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/lpl-leagues">
                    <h1 className="Leagueh1">LPL Pathfinder Leagues</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/lpl-leagues">
                      <img
                        src="https://i.imgur.com/bqbNpmT.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">OCE</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/lpl-leagues">
                    <button type="submit" className="info-button">
                      All Leagues
                    </button>
                  </a>
                </div>
              </div>
              <p className="hr" />
              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/fastcup">
                    <h1 className="Leagueh1">Fast Cup</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/fastcup">
                      <img
                        src="https://i.imgur.com/e7lFoB8.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">EU, CIS, ME, and SA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/fastcup">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/corporate">
                    <h1 className="Leagueh1">Corporate CS2 League</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/corporate">
                      <img
                        src="https://i.imgur.com/87GfbXz.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/corporate">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>
              <p className="hr" />

              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/fireleague">
                    <h1 className="Leagueh1">FiReLEAGUE</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/fireleague">
                      <img
                        src="https://i.imgur.com/gLNXCQA.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA, EU, and SA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/fireleague">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/unitedtwentyone">
                    <h1 className="Leagueh1">United TwentyOne</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/unitedtwentyone">
                      <img
                        src="https://i.imgur.com/VTroInj.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">Worldwide</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/unitedtwentyone">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>
              <p className="hr" />

              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/scl-leagues">
                    <h1 className="Leagueh1">SCL Leagues</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/scl-leagues">
                      <img
                        src="https://i.imgur.com/b6fSddr.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">EU and CIS</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/scl-leagues">
                    <button type="submit" className="info-button">
                      
                      All Leagues
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/hyperfibre-leagues">
                    <h1 className="Leagueh1">Hyperfibre Leagues</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/hyperfibre-leagues">
                      <img
                        src="https://i.imgur.com/Cx4N8HW.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NZ</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/hyperfibre-leagues">
                    <button type="submit" className="info-button">
                      All Leagues
                    </button>
                  </a>
                </div>
              </div>

              <div>
                <p className="hr" />
                <h2 id="league-title1">Collegiate Leagues</h2>
                <img
                  src="https://i.imgur.com/eNhKhTI.png"
                  alt="underline"
                  className="Underline-h1"
                />
                <p className="hr" />
              </div>

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/njcaae">
                    <h1 className="Leagueh1">NJCAAE</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/njcaae">
                      <img
                        src="https://i.imgur.com/jTKBWZM.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">USA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/njcaae">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/necc">
                    <h1 className="Leagueh1">NECC</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/necc">
                      <img
                        src="https://i.imgur.com/0JWBSKD.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/necc">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>
              <p className="hr" />

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/ecac">
                    <h1 className="Leagueh1">ECAC</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/ecac">
                      <img
                        src="https://i.imgur.com/hsLZywE.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">USA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/ecac">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>
              
              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/egfc">
                    <h1 className="Leagueh1">EGFC League</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/egfc">
                      <img
                        src="https://i.imgur.com/euAj2dR.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">USA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/egfc">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>
              <p className="hr" />

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/faceitcollegiate">
                    <h1 className="Leagueh1">FACEIT Collegiate</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/faceitcollegiate">
                      <img
                        src="https://i.imgur.com/e1oqsLF.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/faceitcollegiate">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/nse">
                    <h1 className="Leagueh1">National Student Esports</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/nse">
                      <img
                        src="https://i.imgur.com/mJJJD6e.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">UK</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/nse">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>
              <p className="hr" />

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/playfly">
                    <h1 className="Leagueh1">Playfly College</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/playfly">
                      <img
                        src="https://i.imgur.com/XHCsRTv.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/playfly">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/ael">
                    <h1 className="Leagueh1">Australian Esports Leagues</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/ael">
                      <img
                        src="https://i.imgur.com/YYvUqCM.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">AUS</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/ael">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div>
                <p className="hr" />
                <h2 id="league-title1">High School Leagues</h2>
                <img
                  src="https://i.imgur.com/eNhKhTI.png"
                  alt="underline"
                  className="Underline-h1"
                />
                <p className="hr" />
              </div>

              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/hsel">
                    <h1 className="Leagueh1">High School Esports League</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/hsel">
                      <img
                        src="https://i.imgur.com/fYpPNR1.png"
                        className="league-img"
                      />
                    </a>
                    <a href="https://www.usync.gg/more/verification">
                      <img
                        src="https://i.imgur.com/PCHIHQB.png"
                        title="uSync Verified"
                        className="over-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/hsel">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/CS2/leagues/vantagg">
                    <h1 className="Leagueh1">VantaGG</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/CS2/leagues/vantagg">
                      <img
                        src="https://i.imgur.com/4Lv3iRp.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">USA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/CS2/leagues/vantagg">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>
              <p className="hr" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default CS2_Leagues;