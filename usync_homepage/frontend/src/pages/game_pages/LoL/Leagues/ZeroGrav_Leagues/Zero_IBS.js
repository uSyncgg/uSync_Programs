// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import '../../../../../Info.css';
// The header image will have to be imported the same way as sndleagueheader was but change the name after the last /
// To whatever the name of the saved image is **NOTE** the image must be saved as one word or have -/_ connecting words
import sndleagueheader from '../../../../website_images/games/cod/cod-leagues/sndleagueheader.png';
// usyncletter and gamecheck will be imported the same way on every single verified CoD league game page
// If it is not verified you must import the NOT Verified image and the X
import notverified from '../../../../website_images/games/not-verified.png';
import xverification from '../../../../website_images/games/x-verification.png';
// Import bootstrap like this on every single CoD League game page
import 'bootstrap/dist/css/bootstrap.css';

// Make sure the name following const is the same as the file name
const Zero_IBS = () => {
    return (
        <div>
            <header>
              {/* Use this exact format to insert the header image, change the alt to the league name and
              Change the name inside the {} to be whatever the imported image is but className is the same */}
              <img src={sndleagueheader} alt="Zero IBS Header" className="Header-Img" />
            </header>
            {/* ***Must have this div tage with the Background-mid class name on every file*** */}
            <div className='Background-mid'>
             <div>
                {/* This will be the same for every single file just switch the checkmark to an x if it is not verified 
                along with changing the uSync Verified to the Not verified image and change the alt to Not Verififed*/}
                <img src={notverified} alt="Not Verified" className='Checkmark' />
                <img src={xverification} alt="X" className='Checkmark' />
             </div>
            </div>
            {/* ***You must have this container div*** */}
            <div className='container'>
                {/* ***Must have the row div*** */}
                <div className='row'>
                    {/* All div tags must be set up the same way for every single CoD League game page */}
                    <div className='col-2 offset-3'>
                        <h1>Date:</h1>
                        {/* Keep above date and change the information below to whatever the current date is on the given page
                        Keep button the same */}
                        <p>Fall 2023 (Estimated)</p>
                        <button type="submit" className='back-button'>Back</button>
                    </div>
                    <div className='col-2'>
                        <h1>Details:</h1>
                        {/* Keep details and Region/Type but change information below those h1 tags to whatever the given page says */}
                        <p>$150 Prize Pool</p>
                        <p>Slightly-Competitive</p>
                        <p>Silver 1 100LP cap</p>
                        <p>Live Support on Discord</p>
                        <h1>Region/Type:</h1>
                        <p>5v5 - NA</p>
                    </div>
                    <div className='col-2'>
                        <h1>Entry Fee</h1>
                        {/* Follow the same format as above, keep the Entry fee the same and change information below */}
                        <p>$30 Per Team</p>
                        <p>$10 Forfeit Deposit</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

// Must export default filename otherwise nothing will show up on the web page!
export default Zero_IBS;