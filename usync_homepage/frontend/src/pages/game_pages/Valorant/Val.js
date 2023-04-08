import '../Game.css';

const Val = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/E5cKttY.png" className='Header-Img-l' />
            </header>

            <div className='Background-mid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 offset-3'>
                            <a href='http://localhost:3000/games/Valorant/head-to-head'>
                            <img src="https://i.imgur.com/Eb0q3VJ.png" alt="Valorant Head to Head" className='blockimg1' /> </a>
                            <a href='http://localhost:3000/games/Valorant/lans'>
                            <img src="https://i.imgur.com/pRnsLUn.png" alt="Valorant Lans" className='blockimg2' /></a>
                            <a href='http://localhost:3000/games/Valorant/leagues'>
                            <img src="https://i.imgur.com/D9hSzYi.png" alt="Valorant Leagues" className='blockimg3' /></a>
                            <a href='http://localhost:3000/games/Valorant/NEED PATHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'>
                            <img src="https://i.imgur.com/S6xUnmR.png" alt="Valorant Tourneys" className='blockimg4' /></a>
                            <a href='http://localhost:3000/games/Valorant/wagers'>
                            <img src="https://i.imgur.com/q3EujhS.png" alt="Valorant Wagers" className='blockimg5' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Val;