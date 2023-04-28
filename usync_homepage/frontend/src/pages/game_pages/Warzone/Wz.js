import '../Game.css';
import Footer from '../../../Footer';

const Wz = () => {
    return (
      <div>
        <header id="League-header">
          <img
            src="https://i.imgur.com/hRxTBgv.png"
            className="Header-Img-l-wz"
          />
        </header>

        <div className="Background-game">
          <div className="container">
            <div className="row justify-content-center games-row-1">
              {" "}
              {/* add justify-content-center class to center the columns */}
              <div className="col-lg-4" id="bubblel">
                <a href="http://localhost:3000/games/warzone/lans">
                  <img
                    src="https://i.imgur.com/8mmKkCg.png"
                    alt="warzone LANs"
                    className="blockimg"
                  />{" "}
                </a>
              </div>
              <div className="col-lg-4" id="bubble">
                <a href="http://localhost:3000/Comingsoon">
                  <img
                    src="https://i.imgur.com/Q5kApQ8.png"
                    alt="warzone Tournaments"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubbler">
                <a href="http://localhost:3000/games/warzone/leagues">
                  <img
                    src="https://i.imgur.com/XejELXr.png"
                    alt="warzone Leagues"
                    className="blockimg"
                  />
                </a>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4" id="bubblelb">
                <a href="http://localhost:3000/games/warzone/wagers">
                  <img
                    src="https://i.imgur.com/HrpTxPD.png"
                    alt="warzone Wagers"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubblerb">
                <a href="http://localhost:3000/games/warzone/head-to-head">
                  <img
                    src="https://i.imgur.com/pVeF9I1.png"
                    alt="warzone head-to-head"
                    className="blockimg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Wz;