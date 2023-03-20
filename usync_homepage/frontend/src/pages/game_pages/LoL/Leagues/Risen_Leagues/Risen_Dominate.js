// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import '../../../../../Info.css';
// The header image will have to be imported the same way as sndleagueheader was but change the name after the last /
// To whatever the name of the saved image is **NOTE** the image must be saved as one word or have -/_ connecting words
// usyncletter and gamecheck will be imported the same way on every single verified CoD league game page
// If it is not verified you must import the NOT Verified image and the X
import usyncverified from '../../../../website_images/games/uSync-letter-small.png';
import checkmark from '../../../../website_images/games/game-page-check.png';
// Import bootstrap like this on every single CoD League game page
import 'bootstrap/dist/css/bootstrap.css';

// Make sure the name following const is the same as the file name
const Risen_Dominate = () => {
    return (
        <div>
            <header>
              {/* Use this exact format to insert the header image, change the alt to the league name and
              Change the name inside the {} to be whatever the imported image is but className is the same */}
              <a href="https://imgur.com/Rpkj9TA"><img src="https://i.imgur.com/Rpkj9TA.png" title="source: imgur.com" /></a>
            </header>
            {/* ***Must have this div tage with the Background-mid class name on every file*** */}
            <div className='Background-mid'>
             <div>
                {/* This will be the same for every single file just switch the checkmark to an x if it is not verified 
                along with changing the uSync Verified to the Not verified image and change the alt to Not Verififed*/}
                <img src={usyncverified} alt="uSync Verified" className='Checkmark' />
                <img src={checkmark} alt="Checkmark" className='Checkmark' />
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
                        <p>Spring 2023</p>
                        <button type="submit" className='back-button'>Back</button>
                    </div>
                    <div className='col-2'>
                        <h1>Details:</h1>
                        {/* Keep details and Region/Type but change information below those h1 tags to whatever the given page says */}
                        <p>$225 Prize Pool</p>
                        <p>Competitive</p>
                        <p>Live Streamed Matches</p>
                        <p>Live Support on Discord</p>
                        <p>Diamond 1 soft cap, 150 LP hard cap</p>
                        <h1>Region/Type:</h1>
                        <p>5v5 - NA</p>
                    </div>
                    <div className='col-2'>
                        <h1>Entry Fee</h1>
                        {/* Follow the same format as above, keep the Entry fee the same and change information below */}
                        <p>$35 Per Team</p>
                        <p>$10 Forfeit Deposit</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

// Must export default filename otherwise nothing will show up on the web page!
export default Risen_Dominate;