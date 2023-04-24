// ***File must be made with a CAPITAL first letter***
// ***Navbar.jsx and App.js must be edited to put the added page on the navbar so it can be viewed
// Follow formatting instructions on those pages***
// All CoD League game pages must have Info.css imported this way
//import '../../Info.css';
import './playground.css';
// Import bootstrap like this on every single CoD League game page
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../Footer';
// Make sure the name following const is the same as the file name
const Playground = () => {
    return (
        <div className='total-container'>
            <div className="header">
                <img src="https://i.imgur.com/DztNIjY.png" className='Header-Img'/>
            </div>    
            <div className="background-mid">
                <div className="background-mid-top">
                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/OSMYolc.png" className='Checkmark-title'/></a>
                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" className='Checkmark' /></a>
                    <a href='https://www.google.com/url?q=https%3A%2F%2Fcod.esrl.gg%2F&sa=D&sntz=1&usg=AOvVaw359r5MIeBPnIT5_Guhelh-'target='_blank' rel='noopener noreferrer'>
                        <button className='join-button'>Join Now</button>
                    </a>
                </div>
                <div className="background-mid-bottom">
                    <h1>YOOOOOOOOOOO</h1>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div> 
        </div>
    );
}

// Must export default filename otherwise nothing will show up on the web page!
export default Playground;