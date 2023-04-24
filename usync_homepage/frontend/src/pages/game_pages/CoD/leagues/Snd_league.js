// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
import '../../../../Info.css';
// Import bootstrap like this on every single CoD League game page
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../../../Footer';

// Make sure the name following const is the same as the file name
const Snd_league = () => {
    return (
        <div>
                <header>
                    {/* Use this exact format to insert the header image, change the alt to the league name and
              Change the name inside the {} to be whatever the imported image is but className is the same */}
                    <img src="https://i.imgur.com/l4H7TsU.png" className='Header-Img' />
                </header>
                {/* ***Must have this div tage with the Background-mid class name on every file*** */}
                <div className='Background-mid'>
                    <div className='Background-mid-top'>
                        {/* This will be the same for every single file just switch the checkmark to an x if it is not verified 
                along with changing the uSync Verified to the Not verified image and change the alt to Not Verififed*/}
                        <a href="https://www.usync.gg/more/verification" id="checkmark-title-link" className='mx-auto my-2'><img src="https://i.imgur.com/OSMYolc.png" className='Checkmark-title' /></a>
                        <a href="https://www.usync.gg/more/verification" id="checkmark-link"><img src="https://i.imgur.com/PCHIHQB.png" className='Checkmark' /></a>
                        <a href='https://twitter.com/TheSNDLeague?s=20&t=1wDVDxeYYzurroq3MWGBUQ' target='_blank' rel='noopener noreferrer' id="join-button-link">
                            <button className='join-button'>Join Now</button>
                        </a>
                    </div>
                    {/* ***You must have this container div*** */}
                    <div className='container Background-mid-bottom'>
                        {/* ***Must have the row div*** */}
                        <div className='row league-row-titles' id='row1'>
                            {/* All div tags must be set up the same way for every single CoD League game page */}
                            <div className='col-2 league-info'>
                                <h1 className='info-title'>Date:</h1>
                                {/* Keep above date and change the information below to whatever the current date is on the given page
                        Keep button the same */}
                            </div>
                            <div className='col-2 league-info'>
                                <h1 className='info-title'>Details:</h1>
                                {/* Keep details and Region/Type but change information below those h1 tags to whatever the given page says */}
                            </div>
                            <div className='col-2 league-info'>
                                <h1 className='info-title'>Entry Fee:</h1>
                                {/* Follow the same format as above, keep the Entry fee the same and change information below */}
                            </div>
                        </div>
                        <div className="row league-row-content">
                            <div className="col-2 league-info">
                                <p>Fall 2023 (Estimated)</p>
                            </div>
                            <div className="col-2 league-info">
                                <p>$1000 Prize Pool (Estimated)</p>
                                <p>Highly Competitive</p>
                                <p>Live Streamed games with High Profile Players</p>
                                <p>24/7 Live Support and Admins</p>
                            </div>
                            <div className="col-2 league-info">
                                <p>Must place high in a</p>
                                <p>CODAgent SND League</p>
                                <p>Qualifier Tournament</p>
                                <br></br>
                                <p>Must have Prestige</p>
                                <p>($6.99/month -</p>
                                <p>$99.99/month)</p>
                            </div>
                        </div>
                        <div className="row league-row-titles">
                            <div className="col-2 league-info">
                                <h1 className='info-title2'>Region/Type:</h1>
                            </div>
                        </div>
                        <div className="row league-row-content">
                            <div className="col-2 league-info">
                                <p>3v3/4v4 - All Regions</p>
                            </div>
                        </div>
                        <a href='https://www.usync.gg/games/call-of-duty/leagues'>
                            <button className='back-button'>Back</button>
                        </a>
                    </div>
                </div>
            <Footer />
        </div>

    );
}

// Must export default filename otherwise nothing will show up on the web page!
export default Snd_league;