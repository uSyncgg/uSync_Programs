import '../Game.css';

const Val = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/5KhNJfg.png" className='Header-Img-l-val' />
            </header>

            <div className='Background-game'>
                <div className='container'>
                    <div className='row justify-content-center'> {/* add justify-content-center class to center the columns */}
                        <div className='col-2 offset-3' id='bubblel'>
                            <a href='http://localhost:3000/Comingsoon'>
                                <img src="https://i.imgur.com/pRnsLUn.png" alt="Valorant LANs" className='blockimg' /> </a>
                        </div>
                        <div className='col-2' id='bubble'>
                            <a href='http://localhost:3000/Comingsoon'>
                                <img src="https://i.imgur.com/S6xUnmR.png" alt="Valorant Tournaments" className='blockimg' /></a>
                            </div>
                            <div className='col-2' id='bubbler'>
                                <a href='http://localhost:3000/games/Valorant/leagues'>
                                    <img src="https://i.imgur.com/D9hSzYi.png" alt="Valorant Leagues" className='blockimg' /></a>
                            </div>
                            <div className='col-2 offset-3' id='bubblelb'>
                                <a href='http://localhost:3000/games/Valorant/wagers'>
                                    <img src="https://i.imgur.com/q3EujhS.png" alt="Valorant Wagers" className='blockimg' /></a>
                            </div>
                            <div className='col-2' id='bubblerb'>
                                <a href='http://localhost:3000/games/Valorant/head-to-head'>
                                    <img src="https://i.imgur.com/Eb0q3VJ.png" alt="Valorant head-to-head" className='blockimg' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Val;