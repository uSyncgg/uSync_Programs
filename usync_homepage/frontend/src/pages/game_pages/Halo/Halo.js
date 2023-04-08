import '../Game.css';

const Halo = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/whRC25A.png" className='Header-Img-l' />
            </header>

            <div className='Background-mid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 offset-3'>
                            <a href='http://localhost:3000/games/halo/head-to-head'>
                            <img src="https://i.imgur.com/UC6wGwa.png" alt="Halo Head to Head" className='blockimg1' /> </a>
                            <a href='http://localhost:3000/games/halo/lans'>
                            <img src="https://i.imgur.com/5JagjfE.png" alt="Halo Lans" className='blockimg2' /></a>
                            <a href='http://localhost:3000/games/halo/leagues'>
                            <img src="https://i.imgur.com/oq9dG7T.png" alt="Halo Leagues" className='blockimg3' /></a>
                            <a href='http://localhost:3000/games/halo/NEED PATHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'>
                            <img src="https://i.imgur.com/paDX2YO.png" alt="Halo Tourneys" className='blockimg4' /></a>
                            <a href='http://localhost:3000/games/halo/wagers'>
                            <img src="https://i.imgur.com/aXgvEAv.png" alt="Halo Wagers" className='blockimg5' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Halo;