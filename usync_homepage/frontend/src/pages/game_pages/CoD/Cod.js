import '../Game.css';
import './Cod.css'
import Footer from '../../../Footer';

const Cod = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/tuW3Cvn.png" className='Header-Img-l-cod' />
            </header>

            <div className='Background-game'>
                <div className='container'>
                    <div className='row justify-content-center'> {/* add justify-content-center class to center the columns */}
                        <div className='col-2 offset-3' id='bubblel'>
                            <a href='http://localhost:3000/games/call-of-duty/lans'>
                                <img src="https://i.imgur.com/NXTgpHd.png" alt="Cod LANs" className='blockimg' /> </a>
                        </div>
                        <div className='col-2' id='bubble'>
                            <a href='http://localhost:3000/games/call-of-duty/NEEED PATTTHHHHH'>
                                <img src="https://i.imgur.com/nVx3C4M.png" alt="Cod Tournaments" className='blockimg' /></a>
                        </div>
                        <div className='col-2' id='bubbler'>
                            <a href='http://localhost:3000/games/call-of-duty/leagues'>
                                <img src="https://i.imgur.com/Zj3dVpv.png" alt="Cod Leagues" className='blockimg' /></a>
                        </div>
                        <div className='col-2 offset-3' id='bubblelb'>
                            <a href='http://localhost:3000/games/call-of-duty/wagers'>
                                <img src="https://i.imgur.com/EgBRBVS.png" alt="Cod Tourneys" className='blockimg' /></a>
                        </div>
                        <div className='col-2' id='bubblerb'>
                            <a href='http://localhost:3000/games/call-of-duty/head-to-head'>
                                <img src="https://i.imgur.com/CiO5ViA.png" alt="Cod Wagers" className='blockimg' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Cod;
