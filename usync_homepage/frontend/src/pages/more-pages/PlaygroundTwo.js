import "./PlaygroundTwo.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../../Footer";

function PlaygroundTwo() {
  return (
    <div className="total-playground">
      <header class="headerImg">
        <img src="https://i.imgur.com/DztNIjY.png" className="Header-Img" />
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
              src="https://i.imgur.com/OSMYolc.png"
              className="Checkmark-title"
            />
          </a>
          <a href="https://www.usync.gg/more/verification" id="checkmark-link">
            <img src="https://i.imgur.com/PCHIHQB.png" className="Checkmark" />
          </a>
          <a
            href="https://www.google.com/url?q=https%3A%2F%2Fcod.esrl.gg%2F&sa=D&sntz=1&usg=AOvVaw359r5MIeBPnIT5_Guhelh-"
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
              <p>Late Spring 2023</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Details:</h2>
              <p>No Prize Pool</p>
              <p>Recreational</p>
              <p>Live Streamed Matches</p>
              <h2 className="info-title">Region/Type:</h2>
              <p>4v4 - All Regions</p>
            </div>
            <div class="col-md-4 league-info">
              <h2 className="info-title">Entry Fee:</h2>
              <p>$30 Premade Team</p>
              <p>Free Entry for Solo/Duo Sign Ups</p>
            </div>
          </div>
        </div>
        <a href="https://www.usync.gg/games/call-of-duty/leagues">
          <button className="back-button">Back</button>
        </a>
        <h6 className="become-verified">
          Become <a href="https://www.usync.gg/more/verification">Verified</a>
        </h6>
      </div>
      <Footer />
    </div>
  );
}

export default PlaygroundTwo;
