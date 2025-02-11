import '../CoD/Cod.css'
import Footer from '../../../Footer';
const CS2_Wagers = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/hIpj6hZ.png" className='Header-Img-l' />
                <div className="games-leagues-header-title">
                    <h2 id="league-title">Wagers</h2>
                    <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
                </div>
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/CS2/wagers/dubbzcs2'>
                                    <h1 className='Leagueh1'>Dubbz</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/wagers/dubbzcs2"><img src="https://i.imgur.com/cgPHyyf.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/wagers/dubbzcs2'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/CS2/wagers/showdowngaming_cs2'>
                                    <h1 className='Leagueh1'>Showdown Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/wagers/showdowngaming_cs2"><img src="https://i.imgur.com/1UTQLkh.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/wagers/showdowngaming_cs2'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/CS2/wagers/gamersaloon_cs2'>
                                    <h1 className='Leagueh1'>GamerSaloon</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/CS2/wagers/gamersaloon_cs2"><img src="https://i.imgur.com/MFqfurA.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/CS2/wagers/gamersaloon_cs2'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default CS2_Wagers;