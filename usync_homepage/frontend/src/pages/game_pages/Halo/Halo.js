import '../Game.css';

const Halo = () => {
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
                            <a href='http://localhost:3000/games/halo/head-to-head'>
                            <img src="https://i.imgur.com/CiO5ViA.png" alt="Cod Head to Head" className='blockimg1' /> </a>
                            <a href='http://localhost:3000/games/halo/lans'>
                            <img src="https://i.imgur.com/NXTgpHd.png" alt="Cod Lans" className='blockimg2' /></a>
                            <a href='http://localhost:3000/games/halo/leagues'>
                            <img src="https://i.imgur.com/Zj3dVpv.png" alt="Cod Leagues" className='blockimg3' /></a>
                            <a href='http://localhost:3000/games/halo/NEED PATHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'>
                            <img src="https://i.imgur.com/nVx3C4M.png" alt="Cod Tourneys" className='blockimg4' /></a>
                            <a href='http://localhost:3000/games/halo/wagers'>
                            <img src="https://i.imgur.com/EgBRBVS.png" alt="Cod Wagers" className='blockimg5' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Halo;