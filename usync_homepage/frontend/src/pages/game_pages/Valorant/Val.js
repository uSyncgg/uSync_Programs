import '../Game.css';
import vallans from '../../../website_images/games/val/val-const-lans.png';
import valtourneys from '../../../website_images/games/val/val-const-tourneys.png';
import valh2h from '../../../website_images/games/val/val-h2h.png';
import valleagues from '../../../website_images/games/val/val-leagues.png';
import valwagers from '../../../website_images/games/val/val-wagers.png';

const Val = () => {
    return (
        <div>
            <div className='Background-mid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 offset-3'>
                            <img src={vallans} alt="Valorant Head to Head" className='blockimg' />
                            <img src={valtourneys} alt="Valorant Lans" className='blockimg' />
                            <img src={valleagues} alt="Valorant Leagues" className='blockimg' />
                            <img src={valh2h} alt="Valorant Tourneys" className='blockimg' />
                            <img src={valwagers} alt="Valorant Wagers" className='blockimg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Val;