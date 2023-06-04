import '../game_pages/CoD/Cod.css';
import Footer from '../../Footer';




const Eventhost = () => {
    const handleFeatureEventClick = () => {
      window.location.href = '/more/eventhost/eventhostrequest'
    }

    return (
      <div className="report-container">
        <header id="League-header">
          <img src="https://i.imgur.com/S9U4H7T.png" className="Header-Img-l" />
          <div className="games-leagues-header-title">
            <h2 id="league-title">Our Events</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
          </div>
        </header>

        <div className="Background-leagues">
          <p id="eventhost-p">
            All of our events are taken through a verification process that
            proves that the event is legitimate and in good standing with
            payouts (if applicable). At uSync you can trust the events you are
            entering without having to do extensive research, we take care of it
            all for you in one place!
          </p>
          <br />
          <p id="eventhost-p">
            We strive to bring as many events as possible to the community and
            create a hub of competitive esports. However, in our search for
            competitive events we may miss some. That's why we allow anyone to
            feature any event of their choosing on the form below! Submit your
            application today!
          </p>
          <button className="verified-button" onClick={handleFeatureEventClick}>Feature your event</button>
        </div>
        <p className="hr-report" />
        <p className="report-link" id="verification-post-event">
          Already featured? Become{" "}
          <a id="verification-post-event-a" href="/more/verification/becomeverified">
            Verified
          </a>
        </p>
        <Footer />
      </div>
    );
}
export default Eventhost;