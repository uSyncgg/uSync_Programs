import '../Game.css';
import '../CoD/Cod.css'
import Footer from '../../../Footer';


const Halo = () => {
    return (
      <div>
        <header id="League-header">
          <img
            src="https://i.imgur.com/9WnDZwj.png"
            className="Header-Img-l-halo"
          />
        </header>

        <div className="Background-game">
          <div className="container">
            <div className="row justify-content-center games-row-1">
              {" "}
              {/* add justify-content-center class to center the columns */}
              <div className="col-lg-4" id="bubblel">
                <a href="http://localhost:3000/games/halo/lans">
                  <img
                    src="https://i.imgur.com/5JagjfE.png"
                    alt="Halo LANs"
                    className="blockimg"
                  />{" "}
                </a>
              </div>
              <div className="col-lg-4" id="bubble">
                <a href="http://localhost:3000/Comingsoon">
                  <img
                    src="https://i.imgur.com/paDX2YO.png"
                    alt="Halo Tournaments"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubbler">
                <a href="http://localhost:3000/games/halo/leagues">
                  <img
                    src="https://i.imgur.com/oq9dG7T.png"
                    alt="Halo Leagues"
                    className="blockimg"
                  />
                </a>
              </div>
            </div>
            <div className="row justify-content-center games-row-2">
              <div className="col-lg-4" id="bubblelb">
                <a href="http://localhost:3000/games/halo/wagers">
                  <img
                    src="https://i.imgur.com/aXgvEAv.png"
                    alt="Halo Wagers"
                    className="blockimg"
                  />
                </a>
              </div>
              <div className="col-lg-4" id="bubblerb">
                <a href="http://localhost:3000/games/halo/head-to-head">
                  <img
                    src="https://i.imgur.com/UC6wGwa.png"
                    alt="Halo head-to-head"
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

export default Halo;
