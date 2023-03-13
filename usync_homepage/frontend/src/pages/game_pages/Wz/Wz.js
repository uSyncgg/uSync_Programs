import '../Game.css';
import wzh2h from '../../../website_images/games/wz/wz-h2h.png';
import wzlans from '../../../website_images/games/wz/wz-lans.png';
import wzleagues from '../../../website_images/wz/wz-leagues.png';
import wztourneys from '../../../website_images/wz/wz-tourneys.png';
import wzwagers from '../../../website_images/wz/wz-wagers.png';

const Wz = () => {
    return (
        <div>
            <div className='Background-mid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 offset-3'>
                            <img src={wzlans} alt="Warzone Head to Head" className='blockimg' />
                            <img src={wztourneys} alt="Warzone Lans" className='blockimg' />
                            <img src={wzleagues} alt="Warzone Leagues" className='blockimg' />
                            <img src={wzh2h} alt="Warzone Tourneys" className='blockimg' />
                            <img src={wzwagers} alt="Warzone Wagers" className='blockimg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wz;