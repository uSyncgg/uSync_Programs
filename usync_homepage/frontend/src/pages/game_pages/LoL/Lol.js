import '../Game.css';

const Lol = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/S1RgHJ3.png" className='Header-Img-l' />
            </header>

            <div className='Background-mid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 offset-3'>
                            <a href='http://localhost:3000/games/LoL/head-to-head'>
                            <img src="https://i.imgur.com/y5W9NXc.png" alt="LoL Head to Head" className='blockimg1' /> </a>
                            <a href='http://localhost:3000/games/LoL/lans'>
                            <img src="https://i.imgur.com/sXCt646.png" alt="LoL Lans" className='blockimg2' /></a>
                            <a href='http://localhost:3000/games/LoL/leagues'>
                            <img src="https://i.imgur.com/p77z4SF.png" alt="LoL Leagues" className='blockimg3' /></a>
                            <a href='http://localhost:3000/games/LoL/NEED PATHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'>
                            <img src="https://i.imgur.com/P6GL2lx.png" alt="LoL Tourneys" className='blockimg4' /></a>
                            <a href='http://localhost:3000/games/LoL/wagers'>
                            <img src="https://i.imgur.com/OhtUL4E.png" alt="LoL Wagers" className='blockimg5' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lol;