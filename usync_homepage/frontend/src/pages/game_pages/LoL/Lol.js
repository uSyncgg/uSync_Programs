import '../Game.css';

const Lol = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/de3poHJ.png" className='Header-Img-l-lol' />
            </header>

            <div className='Background-game'>
                <div className='container'>
                    <div className='row justify-content-center'> {/* add justify-content-center class to center the columns */}
                        <div className='col-2 offset-3' id='bubblel'>
                            <a href='http://localhost:3000/games/LoL/lans'>
                                <img src="https://i.imgur.com/sXCt646.png" alt="LoL LANs" className='blockimg' /> </a>
                        </div>
                        <div className='col-2' id='bubble'>
                            <a href='http://localhost:3000/Comingsoon'>
                                <img src="https://i.imgur.com/P6GL2lx.png" alt="LoL Tournaments" className='blockimg' /></a>
                            </div>
                            <div className='col-2' id='bubbler'>
                                <a href='http://localhost:3000/games/LoL/leagues'>
                                    <img src="https://i.imgur.com/p77z4SF.png" alt="LoL Leagues" className='blockimg' /></a>
                            </div>
                            <div className='col-2 offset-3' id='bubblelb'>
                                <a href='http://localhost:3000/games/LoL/wagers'>
                                    <img src="https://i.imgur.com/OhtUL4E.png" alt="LoL Wagers" className='blockimg' /></a>
                            </div>
                            <div className='col-2' id='bubblerb'>
                                <a href='http://localhost:3000/games/LoL/head-to-head'>
                                    <img src="https://i.imgur.com/y5W9NXc.png" alt="LoL head-to-head" className='blockimg' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Lol;