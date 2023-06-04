import styles from '../Home.module.css';
import './game_pages/CoD/Cod.css';
import Footer from '../Footer';

const Lans = () => {
    return (
      <div>
        <div>
          <header id="League-header">
            <img
              src="https://i.imgur.com/YeUPAmO.png"
              className="Header-Img-l"
            />
            <div className="games-leagues-header-title">
            <h2 id="league-title">LANs</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
            </div>
          </header>

          <div className="Background-leagues">
            <div class={styles.backgroundMid}>
              <div className={styles.backgroundImages}>
                <a href="/games/halo/lans">
                  <img
                    src="https://i.imgur.com/wqKJfEu.png"
                    alt="Halo Infinite"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <a href="/games/call-of-duty/lans">
                  <img
                    src="https://i.imgur.com/CsoQufa.png"
                    alt="Modern Warfare 2"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <a href="/games/warzone/lans">
                  <img
                    src="https://i.imgur.com/BIs3u5h.png"
                    alt="Warzone 2"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <a href="/games/LoL/lans">
                  <img
                    src="https://i.imgur.com/5riYNow.png"
                    alt="League of Legends"
                    height="12.5rem"
                    width="12.5rem"
                  />
                </a>
                <hr />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
}
export default Lans;