import '../Game.css';
import rlh2h from '../../../website_images/games/rl/rl-h2h.png';
import rllans from '../../../website_images/games/rl/rl-lans.png';
import rlleagues from '../../../website_images/games/rl/rl-leagues.png';
import rltourneys from '../../../website_images/games/rl/rl-tourneys.png';
import rlwagers from '../../../website_images/games/rl/rl-wagers.png';

const Rl = () => {
    return (
        <div>
            <div className='Background-mid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 offset-3'>
                            <img src={rllans} alt="Rocket League Head to Head" className='blockimg' />
                            <img src={rltourneys} alt="Rocket League Lans" className='blockimg' />
                            <img src={rlleagues} alt="Rocket League Leagues" className='blockimg' />
                            <img src={rlh2h} alt="Rocket League Tourneys" className='blockimg' />
                            <img src={rlwagers} alt="Rocket League Wagers" className='blockimg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rl;