import snd_league from '../../../website_images/games/cod/cod-leagues/snd-league.png';
import './Cod.css';

const Cod_Leagues = () => {
    return(
        <div>
            <div className='Background-mid'>
                <div className='league'>
                    <h1>The SnD League</h1>
                    <img src={snd_league} alt="The SND League" className='league-img' />
                    <p>All Regions</p>
                    <p>insert check img</p>
                    <button type="submit" className='info-button'>More Info</button>
                </div>
            </div>
        </div>
    );
}

export default Cod_Leagues;