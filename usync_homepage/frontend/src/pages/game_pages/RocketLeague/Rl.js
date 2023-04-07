import '../Game.css';

const Rl = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/uXaqfq9.png" className='Header-Img-l' />
                <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
            </header>

            <div className='Background-mid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 offset-3'>
                            <a href='http://localhost:3000/games/RocketLeague/head-to-head'>
                            <img src="https://i.imgur.com/vC5N7DW.png" alt="RL Head to Head" className='blockimg1' /> </a>
                            <a href='http://localhost:3000/games/RocketLeague/lans'>
                            <img src="https://i.imgur.com/5ETdmF8.png" alt="RL Lans" className='blockimg2' /></a>
                            <a href='http://localhost:3000/games/RocketLeague/leagues'>
                            <img src="https://i.imgur.com/C2VoFOV.png" alt="RL Leagues" className='blockimg3' /></a>
                            <a href='http://localhost:3000/games/RocketLeague/NEED PATHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'>
                            <img src="https://i.imgur.com/8ZFHAM6.png" alt="RL Tourneys" className='blockimg4' /></a>
                            <a href='http://localhost:3000/games/RocketLeague/wagers'>
                            <img src="https://i.imgur.com/ylkoL6L.png" alt="RL Wagers" className='blockimg5' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rl;