import './CoD/Cod.css';
import Footer from '../../Footer';




const Report = () => {
    return (
      <div className="report-container">
        <header id="League-header">
          <img src="https://i.imgur.com/PoCqBT9.png" className="Header-Img-l" />
          <div className="games-leagues-header-title">
            <h2 id="league-title">Report an Error</h2>
            <img
              src="https://i.imgur.com/eNhKhTI.png"
              alt="underline"
              className="Underline-h"
            />
          </div>
        </header>

        <div className="Background-leagues">
          <iframe
            className='google-form'
            src="https://docs.google.com/forms/d/e/1FAIpQLScQS0BmGcMtiv4WXLCJcfFJx_uF7Ks1K28-29o-upGAUhQAEA/viewform?embedded=true"
            width="640"
            height="1000"
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
export default Report;