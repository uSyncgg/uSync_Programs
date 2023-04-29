import '../../Info.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../Footer';

const Verification = () => {
    return (
      <div>
        <div id="league-body1">
          <div className="verification-header-img">
            <div className="container-fluid verified-checks-images">
              <div className="row justify-content-center verified-checks-row">
                <div className="col-3 verified-checks-col">
                  <img
                    src="https://i.imgur.com/PCHIHQB.png"
                    className="Checkmark-check"
                  />
                </div>
                <div className="col-3 verified-checks-col">
                  <img
                    src="https://i.imgur.com/0MPIBOK.png"
                    className="Checkmark-notcheck"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Background-mid-veri">
            <div className="usync-veri-image">
              <img
                src="https://i.imgur.com/OSMYolc.png"
                className="Checkmark-title-verification"
              />
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                className="Underline-h-verification"
              />
            </div>
            <h1 className="info-title-verification">
              uSync Verified providers are some of the most trustworthy
              providers that we feature. These events are not only extremely
              well trusted but have shown a record of exceptional quality in
              their work. We strive to verify as many events as possible so that
              you can bring your organization to the highest level of
              competitive play.
            </h1>
            <div className="verified-features-img">
              <h1 className="verified-title">Verified Features</h1>
              <img
                src="https://i.imgur.com/eNhKhTI.png"
                className="Underline-h-verification-2"
              />
            </div>
            <ul>
              <li className="info-title-veri">uSync Verified Badge</li>
              <li className="info-title-veri">
                Choose where your event is located on the page
              </li>
              <li className="info-title-veri">Choose the header image </li>
              <li className="info-title-veri">
                Custom and up to date information
              </li>
              <li className="info-title-veri">
                Dynamic link to participate in events
              </li>
              <li className="info-title-veri">
                Access to our verified support team
              </li>
              <li className="info-title-veri">Social media promotions</li>
              <li className="info-title-veri">Ability to sell event passes</li>
            </ul>
            <a href="https://www.usync.gg/games/call-of-duty/leagues">
              <button className="verified-button">Become Verified</button>
            </a>
            <p id="verification-premium">*Must Pay a Small Premium*</p>
            <div className='hr-border'></div>
            <p id="verification-post-event">Looking to post event? Send <a href="/" id="verification-post-event-a">Event Submission</a></p>
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default Verification;