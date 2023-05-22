import styles from '../Home.module.css';
import './game_pages/CoD/Cod.css';
import Footer from '../Footer';

const Tournaments = () => {
    return (
      <div>
        <div>
          <header id="League-header">
            <img
              src="https://i.imgur.com/HDFldS8.png"
              className="Header-Img-l"
            />
            <div className="games-leagues-header-title">
            <h2 id="league-title">Tournaments</h2>
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
                <a href="/games/call-of-duty/tournaments">
                  <img
                    src="https://i.imgur.com/CsoQufa.png"
                    alt="Modern Warfare 2"
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
export default Tournaments;