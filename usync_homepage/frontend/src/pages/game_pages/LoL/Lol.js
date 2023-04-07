//import '../Game.css';
// import lolh2h from '../../../website_images/games/lol/lol-h2h.png';
// import lollans from '../../../website_images/games/lol/lol-lans.png';
// import lolleagues from '../../../website_images/games/lol/lol-leagues';
// import loltourneys from '../../../website_images/games/lol/lol-tourneys.png';
// import lolwagers from '../../../website_images/games/lol/lol-wagers.png';

const Lol = () => {
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