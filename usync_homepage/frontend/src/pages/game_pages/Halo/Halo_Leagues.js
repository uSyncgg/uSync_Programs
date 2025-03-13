import '../CoD/Cod.css'
import Footer from '../../../Footer';
const Halo_Leagues = () => {
    return (
      <div>
        <header id="League-header">
          <img src="https://i.imgur.com/Jsdvjf3.png" className="Header-Img-l" />
          <div className="games-leagues-header-title">
            <h2 id="league-title">Halo Leagues</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
          </div>
        </header>
        <div className="Background-leagues">
          <div className="container-fluid">
            <div className="row">

              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/halo/leagues/halo-rec-league">
                    <h1 className="Leagueh1">Halo Rec League</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/halo/leagues/halo-rec-league">
                      <img
                        src="https://i.imgur.com/6cA46YH.png"
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
                  <a href="http://localhost:3000/games/halo/leagues/halo-rec-league">
                    <button type="submit" className="info-button">
                      More Info
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="league">
                  <a href="http://localhost:3000/games/halo/leagues/halo-agent">
                    <h1 className="Leagueh1">Halo Agent</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/halo/leagues/halo-agent">
                      <img
                        src="https://i.imgur.com/bHzfdu8.png"
                        className="league-img"
                      />
                    </a>
                  </div>
                  <p className="Leaguep">All Regions</p>
                  <a href="http://localhost:3000/games/halo/leagues/halo-agent">
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
                  <a href="http://localhost:3000/games/halo/leagues/ugc-halo">
                    <h1 className="Leagueh1">College Halo</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/halo/leagues/ugc-halo">
                      <img
                        src="https://i.imgur.com/JeMuXtx.png"
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
                  <a href="http://localhost:3000/games/halo/leagues/ugc-halo">
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
                  <a href="http://localhost:3000/games/halo/leagues/hsel">
                    <h1 className="Leagueh1">High School Esports League</h1>
                  </a>
                  <div className="parent">
                    <a href="http://localhost:3000/games/halo/leagues/hsel">
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
                  <a href="http://localhost:3000/games/halo/leagues/hsel">
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

export default Halo_Leagues;