// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import '../../../../../Info.css';
// Import bootstrap like this on every single CoD League game page
import 'bootstrap/dist/css/bootstrap.css';

// Make sure the name following const is the same as the file name
const AAA = () => {
    return (
        <div>
            <body id='league-body'>
                <header>
                    {/* Use this exact format to insert the header image, change the alt to the league name and
              Change the name inside the {} to be whatever the imported image is but className is the same */}
                    <img src="https://i.imgur.com/XlkTEDt.png" className='Header-Img' />
                </header>
                {/* ***Must have this div tage with the Background-mid class name on every file*** */}
                <div className='Background-mid'>
                    <div>
                        {/* This will be the same for every single file just switch the checkmark to an x if it is not verified 
                along with changing the uSync Verified to the Not verified image and change the alt to Not Verififed*/}
                        <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/OSMYolc.png" className='Checkmark-title' /></a>
                        <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" className='Checkmark' /></a>
                    </div>
                    <a href='https://linktr.ee/officialrlpc'>
                        <button className='join-button'>Join Now</button>
                    </a>
                    {/* ***You must have this container div*** */}
                    <div className='container'>
                        {/* ***Must have the row div*** */}
                        <div className='row' id='league-row'>
                            {/* All div tags must be set up the same way for every single CoD League game page */}
                            <div className='col-2 offset-3' id='league-info'>
                                <h1 className='info-title'>Date:</h1>
                                {/* Keep above date and change the information below to whatever the current date is on the given page
                        Keep button the same */}
                                <p>Late-Spring 2023 (Estimated)</p>
                            </div>
                            <div className='col-2' id='league-info'>
                                <h1 className='info-title'>Details:</h1>
                                {/* Keep details and Region/Type but change information below those h1 tags to whatever the given page says */}
                                <p>No Prize Pool</p>
                                <p>1587 - 1751 MMR</p>
                                <p>Must Sign up Solo</p>
                                <p>Draft Based League</p>
                                <p>Must Sign 1-3 Season Contract</p>
                                <p>Highly Competitive</p>
                                <p>Live Streamed Matches</p>
                                <p>Live Support on Discord</p>
                                <h1 className='info-title2'>Region/Type:</h1>
                                <p>3v3 - NA</p>
                            </div>
                            <div className='col-2' id='league-info'>
                                <h1 className='info-title'>Entry Fee:</h1>
                                {/* Follow the same format as above, keep the Entry fee the same and change information below */}
                                <p>Free Entry</p>
                            </div>
                        </div>
                    </div>
                    <a href='https://www.usync.gg/games/RocketLeague/leagues'>
                        <button className='back-button'>Back</button>
                    </a>
                </div>
            </body>
        </div>

    );
}

// Must export default filename otherwise nothing will show up on the web page!
export default AAA;