import '../CoD/Cod.css'
import Footer from '../../../Footer';
const Lol_Leagues = () => {
    return (
      <div>
        <header id="League-header">
          <img src="https://i.imgur.com/NycBCVA.png" className="Header-Img-l" />
          <div className="games-leagues-header-title">
            <h2 id="league-title-lol">League of Legends Leagues</h2>
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
                  <a href="http://localhost:3000/games/LoL/leagues/titan-leagues">
                    <h1 className="Leagueh1">Titan Esports Leagues</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/titan-leagues">
                      <img
                        src="https://i.imgur.com/cB4ptXT.png"
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
                  <a href="http://localhost:3000/games/LoL/leagues/titan-leagues">
                    <button type="submit" className="info-button">
                      All Leagues
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/risen-leagues">
                    <h1 className="Leagueh1">Risen Leagues</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/risen-leagues">
                      <img
                        src="https://i.imgur.com/s5LrZoC.png"
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
                  <a href="http://localhost:3000/games/LoL/leagues/risen-leagues">
                    <button type="submit" className="info-button">
                      All Leagues
                    </button>
                  </a>
                </div>
              </div>
              <p className="hr" />
              
              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/aegis-leagues">
                    <h1 className="Leagueh1">Aegis Leagues</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/aegis-leagues">
                      <img
                        src="https://i.imgur.com/iy67hgo.png"
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
                  <a href="http://localhost:3000/games/LoL/leagues/aegis-leagues">
                    <button type="submit" className="info-button">
                      All Leagues
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/blue-otter-leagues">
                    <h1 className="Leagueh1">Blue Otter Leagues</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/blue-otter-leagues">
                      <img
                        src="https://i.imgur.com/RaTizzw.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/LoL/leagues/blue-otter-leagues">
                    <button type="submit" className="info-button">
                      All Leagues
                    </button>
                  </a>
                </div>
              </div>

              <p className="hr" />
              
              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/black-twitch-league">
                    <h1 className="Leagueh1">Black Twitch League</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/black-twitch-league">
                      <img
                        src="https://i.imgur.com/ZuJA3w1.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">GM Cap</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/LoL/leagues/black-twitch-league">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/low-budget-leagues">
                    <h1 className="Leagueh1">Low Budget LCS Leagues</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/low-budget-leagues">
                      <img
                        src="https://i.imgur.com/lPFfJL9.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/LoL/leagues/low-budget-leagues">
                    <button type="submit" className="info-button">
                      All Leagues
                    </button>
                  </a>
                </div>
              </div>

              <p className="hr" />

              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/meta-shift-leagues">
                    <h1 className="Leagueh1">MetaShift Leagues</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/meta-shift-leagues">
                      <img
                        src="https://i.imgur.com/XiFomA7.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/LoL/leagues/meta-shift-leagues">
                    <button type="submit" className="info-button">
                      All Leagues
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/sdc">
                    <h1 className="Leagueh1">SDC League</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/sdc">
                      <img
                        src="https://i.imgur.com/A4LXnAj.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/LoL/leagues/sdc">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <p className="hr" />

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/cobalt-winds-leagues">
                    <h1 className="Leagueh1">Cobalt Winds Leagues</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/cobalt-winds-leagues">
                      <img
                        src="https://i.imgur.com/sMnBEnL.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">EUW</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/LoL/leagues/cobalt-winds-leagues">
                    <button type="submit" className="info-button">
                      All Leagues
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/corporate-league">
                    <h1 className="Leagueh1">Corporate LoL League</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/corporate-league">
                      <img
                        src="https://i.imgur.com/k63mdno.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/LoL/leagues/corporate-league">
                    <button type="submit" className="info-button">
                      More Info
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

              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/clol">
                    <h1 className="Leagueh1">CLOL</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/clol">
                      <img
                        src="https://i.imgur.com/2jNA26x.png"
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
                  <a href="http://localhost:3000/games/LoL/leagues/clol">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/playfly">
                    <h1 className="Leagueh1">Playfly College</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/playfly">
                      <img
                        src="https://i.imgur.com/XHCsRTv.png"
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
                  <a href="http://localhost:3000/games/LoL/leagues/playfly">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>
              <p className="hr" />

              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/necc">
                    <h1 className="Leagueh1">NECC</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/necc">
                      <img
                        src="https://i.imgur.com/wUMekqz.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">NA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/LoL/leagues/necc">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/ecac">
                    <h1 className="Leagueh1">ECAC Esports</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/ecac">
                      <img
                        src="https://i.imgur.com/hsLZywE.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">USA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/LoL/leagues/ecac">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <p className="hr" />

              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/nse">
                    <h1 className="Leagueh1">National Student Esports</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/nse">
                      <img
                        src="https://i.imgur.com/mJJJD6e.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">UK</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/LoL/leagues/nse">
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

              <div className="col-lg-6 bottom-card">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/vantagg">
                    <h1 className="Leagueh1">VantaGG</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/vantagg">
                      <img
                        src="https://i.imgur.com/4Lv3iRp.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">USA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/LoL/leagues/vantagg">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/LoL/leagues/playvs">
                    <h1 className="Leagueh1">PlayVS</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/LoL/leagues/playvs">
                      <img
                        src="https://i.imgur.com/dj20PCp.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">USA</p>
                  {/* <img src={check} alt="uSync Verified" className='check' /> */}
                  <a href="http://localhost:3000/games/LoL/leagues/playvs">
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

export default Lol_Leagues;