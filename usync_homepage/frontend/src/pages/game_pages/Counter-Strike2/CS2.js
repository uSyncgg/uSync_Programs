import '../Game.css';
import Footer from '../../../Footer';

const CS2 = () => {
    return (
      <div className="total-container">
        <header id="League-header">
          <img
            src="https://i.imgur.com/8dwjkca.png"
            className="Header-Img-l"
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
                    src="https://i.imgur.com/ciqy3Bd.png"
                    alt="CS2 LANs"
                    className="blockimg"
                  />{" "}
                </a>
              </div>
              <div className="col-lg-4" id="bubble">
              <a href="http://localhost:3000/Comingsoon">
              <img
                    src="https://i.imgur.com/ugKIhLq.png"
                    alt="CS2 Tournaments"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubbler">
                <a href="http://localhost:3000/games/CS2/leagues">
                  <img
                    src="https://i.imgur.com/gE6ZfqX.png"
                    alt="CS2 Leagues"
                    className="blockimg"
                  />
                </a>
              </div>
            </div>
            <div className="row justify-content-center games-row-2">
              <div className="col-lg-4" id="bubblelb">
                <a href="http://localhost:3000/games/CS2/wagers">
                  <img
                    src="https://i.imgur.com/SzMtvPy.png"
                    alt="CS2 Wagers"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubblerb">
                <a href="http://localhost:3000/games/CS2/head-to-head">
                  <img
                    src="https://i.imgur.com/b9B93ig.png"
                    alt="CS2 head-to-head"
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

export default CS2;
