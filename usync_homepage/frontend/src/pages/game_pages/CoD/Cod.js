import codh2h from '../../../website_images/games/cod/cod-h2h.png';
import codlans from '../../../website_images/games/cod/cod-lans.png';
import codleagues from '../../../website_images/games/cod/cod-leagues.png';
import codtourneys from '../../../website_images/games/cod/cod-tourneys.png';
import codwagers from '../../../website_images/games/cod/cod-wagers.png';
import '../Game.css';

const Cod = () => {
    return (
        <div>
            <div className='Background-mid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 offset-3'>
                            <img src={codlans} alt="Cod Head to Head" className='blockimg' />
                            <img src={codtourneys} alt="Cod Lans" className='blockimg' />
                            <img src={codleagues} alt="Cod Leagues" className='blockimg' />
                            <img src={codh2h} alt="Cod Tourneys" className='blockimg' />
                            <img src={codwagers} alt="Cod Wagers" className='blockimg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cod;