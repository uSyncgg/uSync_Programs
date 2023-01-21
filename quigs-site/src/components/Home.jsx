import './Home.css';
import apexUC from './img/apexUC.jpg';
import codVAN from './img/codVAN.jpg';
import codWZ from './img/codWZ.jpg';
import halo from './img/halo.jpg';
import LOL from './img/LOL.jpg';
import ow2 from './img/ow2UC.jpg';
import RL from './img/RL.jpg';
import smash from './img/smashUC.jpg';
import val from './img/val.jpg';

const Home = () => {
    return (
        <div>
            <div id='heading'>
                <div id='heading-textarea'>
                    <div id='heading-title'>u<text style={{color:'#8E6ACE'}}>Sync</text></div>
                    <div id='heading-subtitle'>Finding <text style={{textDecoration:'underline', textDecorationColor: '#8E6ACE'}}>esports</text> competitions is challending. 
                        We make finding competition for each game not only <text style={{textDecoration:'underline', textDecorationColor: '#8E6ACE'}}>simple</text>, 
                        but <text style={{textDecoration:'underline', textDecorationColor: '#8E6ACE'}}>all in one place</text>.
                    </div>
                    <a id='heading-button' href='games'>Get Started</a>
                    <div id='heading-sub-sub-title'></div>
                    <div id='heading-downarrow'></div>
                </div>
            </div>
            <div id='supported-titles'>
                <h1 className='sectionTitle'>Supported Titles</h1>
                <ul className='titlesList'>
                    <a href='/games/halo'><li className='titles'><img className='titlesImg' src={halo}/></li></a>
                    <a href='/games/call-of-duty'><li className='titles'><img className='titlesImg' src={codVAN}/></li></a>
                    <a href='/games/warzone'><li className='titles'><img className='titlesImg' src={codWZ}/></li></a>
                    <a href='/games/league-of-legends'><li className='titles'><img className='titlesImg' src={LOL}/></li></a>
                    <a href='/games/rocket-league'><li className='titles'><img className='titlesImg' src={RL}/></li></a>
                    <a href='/games/valorant'><li className='titles'><img className='titlesImg' src={val}/></li></a>
                </ul>
            </div>
            <div className='divider'></div>
            <div id='lan-events'>
                <h1 className='sectionTitle'>LAN Events</h1>
                <div style={{position: 'relative', width: '70%', left: '15%', padding: 'none', margin: 'none'}}>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1QrCfeXFSyZJMXLzUeAiIWy0hcWgaJVg&ehbc=2E312F"
                        width="100%" height="640">    
                    </iframe>
                </div>
            </div>
            <div className='divider'></div>
            <div id='coming-soon'>
                <h1 className='sectionTitle'>Coming Soon!</h1>
                <ul className='titlesList'>
                    <a href='/coming-soon'><li className='titles'><img className='titlesImg' src={ow2}/></li></a>
                    <a href='/coming-soon'><li className='titles'><img className='titlesImg' src={smash}/></li></a>
                    <a href='/coming-soon'><li className='titles'><img className='titlesImg' src={apexUC}/></li></a>
                </ul>
            </div>
        </div>
    );
}
export default Home;