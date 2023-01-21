import './Body.css';

import apexUC from './img/apexUC.jpg';
import codVAN from './img/codVAN.jpg';
import codWZ from './img/codWZ.jpg';
import halo from './img/halo.jpg';
import LOL from './img/LOL.jpg';
import ow2 from './img/ow2UC.jpg';
import RL from './img/RL.jpg';
import smash from './img/smashUC.jpg';
import val from './img/val.jpg';

const Body = () => {
    return (
        <div id="body">
            <div id='heading-body'>
                <h1 id='heading-text'>uSync Titles</h1>
            </div>
            <div id='supported-titles'>
                <h1 id='titles-titleone'></h1>
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
            <div id='section'>
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

export default Body;