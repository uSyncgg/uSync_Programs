import '../../Info.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../Footer';

const Eventhost = () => {
    return (
      <div>
        <div id="league-body2">
          <header>
            <img src="https://i.imgur.com/0Wrn8wp.png" className="Header-Img" />
            <div className="event-host-header-title">
              <h1 className="event-title">Our Events</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                className="Underline-h-verification-event"
              />
            </div>
          </header>
          <div className="Background-mid-contact">
            <h1 className="info-title-verification-event1">
              All of our events are taken through a verification process that
              proves that the event is legitimate and in good standing with
              payouts (if applicable). At uSync you can trust the events you are
              entering without having to do extensive research, we take care of
              it all for you in one place!
            </h1>
            <h1 className="info-title-verification-event">
              We strive to bring as many events as possible to the community and
              create a hub of competitive esports. However, in our search for
              competitive events we may miss some. That's why we allow anyone to
              feature any event of their choosing on the form below! Submit your
              application today!
            </h1>
            <a href="https://www.usync.gg/games/call-of-duty/leagues">
              <button className="eventhost-button">Feature Your Event</button>
            </a>
            <div className='hr-border'></div>
            <p id="featured-become-verified">Already Featured? Become <a href="/more/verification" id="featured-become-verified-a">Verified</a></p>
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default Eventhost;