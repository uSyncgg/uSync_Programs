// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import '../../../../Info.css';
// Import bootstrap like this on every single CoD League game page
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../../../Footer';

// Make sure the name following const is the same as the file name
const EAgent_Wagers = () => {
    return (
        <div>
                        <body id='league-body'>

            <header>
                {/* Use this exact format to insert the header image, change the alt to the league name and
              Change the name inside the {} to be whatever the imported image is but className is the same */}
                <img src="https://i.imgur.com/o2pPHf6.png" className='Header-Img'/>
            </header>
            {/* ***Must have this div tage with the Background-mid class name on every file*** */}
            <div className='Background-mid'>
                <div>
                    {/* This will be the same for every single file just switch the checkmark to an x if it is not verified 
                along with changing the uSync Verified to the Not verified image and change the alt to Not Verififed*/}
                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/OSMYolc.png" className='Checkmark-title' /></a>
                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" className='Checkmark' /></a>
                </div>
                <a href='https://esportsagent.gg/wagers'target='_blank' rel='noopener noreferrer'>
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
                            <p>Regular Member: 5%</p>
                            <p>Prestige Member: 0%</p>
                            <p>No Fee & Instant Deposits/Withdrawals</p>
                        </div>
                        <div className='col-2'id='league-info'>
                        <h1 className='info-title'>Features:</h1>
                            {/* Keep details and Region/Type but change information below those h1 tags to whatever the given page says */}
                            <p>24/7 Live Support on Website</p>
                            <p>CDL Ruleset with Select GA's</p>
                            <p>Consistent Rule Updates</p>
                            <p>PC Reset / Monitor Cam Options</p>
                        </div>
                        <div className='col-2'id='league-info'>
                        <h1 className='info-title'>Restrictions:</h1>
                            {/* Follow the same format as above, keep the Entry fee the same and change information below */}
                            <p>18+</p>
                            <p>Available Worldwide</p>
                            <p>US State Restrictions: AZ, MT, and SD</p>
                        </div>
                    </div>
                </div>             
                <a href='https://www.usync.gg/games/call-of-duty/wagers'>
                    <button className='back-button'>Back</button>
                </a>
            </div>
            </body>
            <Footer/>
        </div>

    );
}

// Must export default filename otherwise nothing will show up on the web page!
export default EAgent_Wagers;