// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import '../../../../../Info.css';
// Import bootstrap like this on every single CoD League game page
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../../../../Footer';

// Make sure the name following const is the same as the file name
const Challenger_SCL = () => {
    return (
        <div className="total-playground">
      <header class="headerImg">
      <img src="https://i.imgur.com/UDHxFWg.png" className="Header-Img" />
      </header>
      <div className="background-mid">
        <div className="Background-mid-top">
          {/* This will be the same for every single file just switch the checkmark to an x if it is not verified 
                along with changing the uSync Verified to the Not verified image and change the alt to Not Verififed
                
                Add id="checkmark-title-link" className='mx-auto my-2' as attributes to the .Checkmark-title a tag
                Add id="checkmark-link" to the .Checkmark a tag
                Add id='join-button-link' to the .join-button a tag*/}
          <a
            href="https://www.usync.gg/more/verification"
            id="checkmark-title-link"
            className="mx-auto my-2"
          >
            <img
              src="https://i.imgur.com/HaRfFh9.png"
              className="Checkmark-title"
            />
          </a>
          <a href="https://www.usync.gg/more/verification" id="checkmark-link">
            <img src="https://i.imgur.com/0MPIBOK.png" className="Checkmark" />
          </a>
          <a
            href="https://scl.gg/"
            target="_blank"
            rel="noopener noreferrer"
            id="join-button-link"
          >
            <button className="join-button">Join Now</button>
          </a>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4 league-info">
              <h2 className="info-title">Date:</h2>
              <p>Annual Spring Season</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>Prize Pool Based on Division (€2,000 +/-)</p>
              <p>Advance to Higher Division By Placing T16, or Applying</p>
              <p>4 Week Long Regular Season</p>
              <p>3 Week Long Playoffs</p>
              <p>Highly Competitive</p>
              <h2 className="info-title3">Region/Type:</h2>
              <p>5v5 - EU and CIS</p>
            </div>
            <div class="col-md-4 league-info">
            <h2 className="info-title leagues-entry-fee">Entry Fee:</h2>
            <p>Entry Fee Based on Division (Minimum: 6.99€)</p>
            <p>Early Bird 15% Discount</p>
            </div>
          </div>
        </div>
        <div className="league-back-button-container">
          <a href="https://www.usync.gg/games/CS2/leagues/scl-leagues" id='league-back-button-a'>
            <button className="back-button">Back</button>
          </a>
        </div>
        <div className="become-verified">
          <h6>
            Become <a href="https://www.usync.gg/more/verification">Verified</a>
          </h6>
        </div>
      </div>
      <Footer />
    </div>
    );
}

// Must export default filename otherwise nothing will show up on the web page!
export default Challenger_SCL;