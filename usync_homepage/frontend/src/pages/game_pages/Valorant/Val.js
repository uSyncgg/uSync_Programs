import '../Game.css';
import Footer from '../../../Footer';


const Val = () => {
    return (
      <div>
        <header id="League-header">
          <img
            src="https://i.imgur.com/HqldA9u.png"
            className="Header-Img-l-val"
          />
        </header>

        <div className="Background-game">
          <div className="container">
            <div className="row justify-content-center games-row-1">
              {" "}
              {/* add justify-content-center class to center the columns */}
              <div className="col-lg-4" id="bubblel">
                <a href="http://localhost:3000/Comingsoon">
                  <img
                    src="https://i.imgur.com/pRnsLUn.png"
                    alt="Valorant LANs"
                    className="blockimg"
                  />{" "}
                </a>
              </div>
              <div className="col-lg-4" id="bubble">
                <a href="http://localhost:3000/Comingsoon">
                  <img
                    src="https://i.imgur.com/S6xUnmR.png"
                    alt="Valorant Tournaments"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubbler">
                <a href="http://localhost:3000/games/Valorant/leagues">
                  <img
                    src="https://i.imgur.com/D9hSzYi.png"
                    alt="Valorant Leagues"
                    className="blockimg"
                  />
                </a>
              </div>
            </div>
            <div className="row justify-content-center games-row-2">
              <div className="col-lg-4" id="bubblelb">
                <a href="http://localhost:3000/games/Valorant/wagers">
                  <img
                    src="https://i.imgur.com/q3EujhS.png"
                    alt="Valorant Wagers"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubblerb">
                <a href="http://localhost:3000/games/Valorant/head-to-head">
                  <img
                    src="https://i.imgur.com/Eb0q3VJ.png"
                    alt="Valorant head-to-head"
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

export default Val;