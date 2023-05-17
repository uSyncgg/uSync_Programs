import '../game_pages/CoD/Cod.css';
import Footer from '../../Footer';




const Becomeverified = () => {
    return (
      <div className="report-container">
        <div className="verification-header-img-container">
          <div className="verification-header-checks justify-content-center">
            <img
              src="https://i.imgur.com/PCHIHQB.png"
              className="veri-checkmark"
            />
            <img
              src="https://i.imgur.com/0MPIBOK.png"
              className="veri-checkmark"
            />
          </div>
        </div>

        <div className="Background-leagues">
          <iframe
            className="google-form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeWOlTuVQqnd7x-MVrm2ljwgUwxIyRhmKyy722eS6Aas-mU8g/viewform?embedded=true"
            width="640"
            height="1405"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
        <hr />
        <p className="hr-report" />
        <p className="report-link" id="verification-post-event">
          Looking to post event? Send{" "}
          <a id="verification-post-event-a" href="/more/eventhost/eventhostrequest">
            Event Submission
          </a>
        </p>
        <Footer />
      </div>
    );
}
export default Becomeverified;