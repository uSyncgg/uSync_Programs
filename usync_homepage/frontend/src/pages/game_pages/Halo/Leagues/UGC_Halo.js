// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import '../../../../Info.css';
// Import bootstrap like this on every single CoD League game page
import 'bootstrap/dist/css/bootstrap.css';

// Make sure the name following const is the same as the file name
const UGC_Halo = () => {
    return (
        <div>
            <header>
                {/* Use this exact format to insert the header image, change the alt to the league name and
              Change the name inside the {} to be whatever the imported image is but className is the same */}
                <img src="https://i.imgur.com/4tTXxCe.png" />
            </header>
            {/* ***Must have this div tage with the Background-mid class name on every file*** */}
            <div className='Background-mid'>
                <div>
                    {/* This will be the same for every single file just switch the checkmark to an x if it is not verified 
                along with changing the uSync Verified to the Not verified image and change the alt to Not Verififed*/}
                    <a href="https://imgur.com/OSMYolc"><img src="https://i.imgur.com/OSMYolc.png" className='Checkmark' /></a>
                    <a href="https://imgur.com/PCHIHQB"><img src="https://i.imgur.com/PCHIHQB.png" className='Checkmark' /></a>
                </div>
                <button type="submit" className='join-button'>Join Now</button>
                {/* ***You must have this container div*** */}
                <div className='container'>
                    {/* ***Must have the row div*** */}
                    <div className='row'>
                        {/* All div tags must be set up the same way for every single CoD League game page */}
                        <div className='col-2 offset-3'>
                            <h1>Date:</h1>
                            {/* Keep above date and change the information below to whatever the current date is on the given page
                        Keep button the same */}
                            <p>Spring 2023 (Estimated)</p>
                            <button type="submit" className='back-button'>Back</button>
                        </div>
                        <div className='col-2'>
                            <h1>Details:</h1>
                            {/* Keep details and Region/Type but change information below those h1 tags to whatever the given page says */}
                            <p>$7500+ Prize Pool</p>
                            <p>Highly Competitive</p>
                            <p>No Live Streamed Matches</p>
                            <p>Known for Delaying Payments / Unresponsiveness</p>
                            <h1>Region/Type:</h1>
                            <p>4v4 - NA</p>
                        </div>
                        <div className='col-2'>
                            <h1>Entry Fee</h1>
                            {/* Follow the same format as above, keep the Entry fee the same and change information below */}
                            <p>Premium UGC Membership</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

// Must export default filename otherwise nothing will show up on the web page!
export default UGC_Halo;