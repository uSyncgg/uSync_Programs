import '../Game.css';
import haloh2h from '../../../website_images/games/halo/halo-h2h.png';
import halolans from '../../../website_images/games/halo/halo-lans.png';
import haloleagues from '../../../website_images/games/halo/halo-leagues.png';
import halotourneys from '../../../website_images/games/halo/halo-tourneys.png';
import halowagers from '../../../website_images/games/halo/halo-wagers.png';

const Halo = () => {
    return (
        <div>
            <div className='Background-mid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 offset-3'>
                            <img src={halolans} alt="Halo Head to Head" className='blockimg' />
                            <img src={halotourneys} alt="Halo Lans" className='blockimg' />
                            <img src={haloleagues} alt="Halo Leagues" className='blockimg' />
                            <img src={haloh2h} alt="Halo Tourneys" className='blockimg' />
                            <img src={halowagers} alt="Halo Wagers" className='blockimg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Halo;