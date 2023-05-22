import '../Info.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Footer';
import styles from '../Home.module.css';

const Comingsoon = () => {
    return (
      <div className="total-coming-soon-container">
        <div id="league-body2">
          <header>
            <div className="header-img-container">
              <img
                src="https://i.imgur.com/0Wrn8wp.png"
                className="Header-Img header-img-zoom"
              />
            </div>
            <div className="games-leagues-header-title">
              <h2 id="league-title">Coming Soon</h2>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                alt="underline"
                className="Underline-h"
              />
            </div>
          </header>
          <div className="Background-mid-contact">
            <div className="game-titles">
              <h1 className="event-title-contactus">Game Titles</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                className="Underline-h-verification-coming"
              />
            </div>
            <div className="container">
              <div className="row justify-content-center coming-soon-row">
                <div className="col-sm-2">
                  <img
                    src="https://i.imgur.com/MUcaqmt.png"
                    alt="Apex Legends"
                    className="coming-soon-img"
                  />
                </div>
                <div className="col-sm-2">
                  <img
                    src="https://i.imgur.com/qpQDtRJ.png"
                    alt="Super Smash Brothers"
                    className="coming-soon-img"
                  />
                </div>
                <div className="col-sm-2">
                  <img
                    src="https://i.imgur.com/XxOYZiE.png"
                    alt="Overwatch 2"
                    className="coming-soon-img"
                  />
                </div>
              </div>
            </div>
            <div className="coming-soon-background-mid-bottom">
              <h1 className="coming-soon-text">
                We are actively working on different titles in order to bring
                the best competition to you. These take time due to the
                competitive scenes varying from title to title. Your continued
                use of our services allow for us to keep working on new titles
                for the future. Thank you!
              </h1>
              <h1 className="event-title-coming">Event Types</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                className="Underline-h-coming"
              />
              <div className="container event-types-images">
                <div className="row justify-content-center">
                  <div className="col-sm-4">
                    <img
                      src="https://i.imgur.com/8ZFHAM6.png"
                      alt="RocketLeague Tournaments"
                      className="blockimg-coming-soon"
                      id="coming-soon-online-tournaments"
                    />
                  </div>
                </div>
              </div>
              <h1 className="info-title-coming2">
                We are looking to provide a list of daily tournaments from all
                of the varying sites so that players don't have to move from
                site to site to find what they are looking for. Eventually, we
                will have EVERY tournament in the world posted on uSync, just
                give us some time!
              </h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default Comingsoon;

