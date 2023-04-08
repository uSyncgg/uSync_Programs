import '../Game.css';

const Wz = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/PAVx8lZ.png" className='Header-Img-l' />
            </header>

            <div className='Background-mid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 offset-3'>
                            <a href='http://localhost:3000/games/warzone/head-to-head'>
                            <img src="https://i.imgur.com/pVeF9I1.png" alt="Warzone Head to Head" className='blockimg1' /> </a>
                            <a href='http://localhost:3000/games/warzone/lans'>
                            <img src="https://i.imgur.com/8mmKkCg.png" alt="Warzone Lans" className='blockimg2' /></a>
                            <a href='http://localhost:3000/games/warzone/leagues'>
                            <img src="https://i.imgur.com/XejELXr.png" alt="Warzone Leagues" className='blockimg3' /></a>
                            <a href='http://localhost:3000/games/warzone/NEED PATHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'>
                            <img src="https://i.imgur.com/Q5kApQ8.png" alt="Warzone Tourneys" className='blockimg4' /></a>
                            <a href='http://localhost:3000/games/warzone/wagers'>
                            <img src="https://i.imgur.com/HrpTxPD.png" alt="Warzone Wagers" className='blockimg5' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wz;