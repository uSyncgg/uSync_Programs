// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import '../../../../Info.css';
// Import bootstrap like this on every single CoD League game page
import 'bootstrap/dist/css/bootstrap.css';

// Make sure the name following const is the same as the file name
const Oneup_Wagers = () => {
    return (
        <div>
                        <body id='league-body'>

            <header>
                {/* Use this exact format to insert the header image, change the alt to the league name and
              Change the name inside the {} to be whatever the imported image is but className is the same */}
                <img src="https://i.imgur.com/DWyIbm3.png" className='Header-Img'/>
            </header>
            {/* ***Must have this div tage with the Background-mid class name on every file*** */}
            <div className='Background-mid'>
                <div>
                    {/* This will be the same for every single file just switch the checkmark to an x if it is not verified 
                along with changing the uSync Verified to the Not verified image and change the alt to Not Verififed*/}
                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/HaRfFh9.png" className='Checkmark-title' /></a>
                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/0MPIBOK.png" className='Checkmark' /></a>
                </div>
                <a href='https://playoneup.com/'>
                    <button className='join-button'>Join Now</button>
                </a>
                {/* ***You must have this container div*** */}
                <div className='container'>
                    {/* ***Must have the row div*** */}
                    <div className='row'id='league-row'>
                        {/* All div tags must be set up the same way for every single CoD League game page */}
                        <div className='col-2 offset-3'id='league-info'>
                        <h1 className='info-title'>Fees:</h1>
                            {/* Keep above date and change the information below to whatever the current date is on the given page
                        Keep button the same */}
                            <p>Match Fees: 15%</p>
                            <p>Instant Withdrawals: 10%</p>
                            <p>Free 3-5 Day Withdrawals</p>
                            <p>$50 MINIMUM Withdrawals</p>
                        </div>
                        <div className='col-2'id='league-info'>
                        <h1 className='info-title'>Features:</h1>
                            {/* Keep details and Region/Type but change information below those h1 tags to whatever the given page says */}
                            <p>Cold War - 1v1 ONLY</p>
                            <p>Live Support on App</p>
                            <p>Small Maps ONLY</p>
                            <p>Small Number of Users</p>
                        </div>
                        <div className='col-2'id='league-info'>
                        <h1 className='info-title'>Restrictions:</h1>
                            {/* Follow the same format as above, keep the Entry fee the same and change information below */}
                            <p>18+</p>
                            <p>Available Worldwide</p>
                            <p>US State Restrictions: AZ, AK, IA, LA, MD, MI, MT, NV, SC, TN, VT, and WA</p>
                        </div>
                    </div>
                </div>
                <a href='https://www.usync.gg/games/call-of-duty/wagers'>
                    <button className='back-button'>Back</button>
                </a>
            </div>
            </body>
        </div>

    );
}

// Must export default filename otherwise nothing will show up on the web page!
export default Oneup_Wagers;