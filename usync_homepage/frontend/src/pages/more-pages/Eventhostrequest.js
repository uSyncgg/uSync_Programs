import '../game_pages/CoD/Cod.css';
import Footer from '../../Footer';




const Eventhostrequest = () => {
    return (
      <div className="report-container">
        <header id="League-header">
          <img src="https://i.imgur.com/S9U4H7T.png" className="Header-Img-l" />
          <div className="games-leagues-header-title">
            <h2 id="league-title">Feature Your Event</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
          </div>
        </header>

        <div className="Background-leagues">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf8UhB2bn7wDN9mHTpEfFvlLN9ZkDA47uWfUaAInWujsuez2g/viewform?embedded=true"
            width="640"
            height="1800"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
        <p className="hr-report" />
        <p className="report-link" id="verification-post-event">
          Looking to post an event?{" "}
          <a id="verification-post-event-a" href="/more/eventhost">
            Learn more
          </a>
        </p>
        <Footer />
      </div>
    );
}
export default Eventhostrequest;