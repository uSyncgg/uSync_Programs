import '../../../CoD/Cod.css';
import Footer from '../../../../../Footer';
const Frontpage_Val_Victoris = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/IGYOpWF.png" className='Header-Img-l' />
                <h2 id="league-title">Victoris Leagues</h2>
                <img src="https://i.imgur.com/eNhKhTI.png" alt="underline" className='Underline-h' />
            </header>

            <div className='Background-leagues'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/victoris-leagues/vls'>
                                    <h1 className='Leagueh1'>Legend Series League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/victoris-leagues/vls"><img src="https://i.imgur.com/JIc8LXS.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Platinum & Above</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/victoris-leagues/vls'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/Valorant/leagues/victoris-leagues/vrs'>
                                    <h1 className='Leagueh1'>Rival Series League</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/Valorant/leagues/victoris-leagues/vrs"><img src="https://i.imgur.com/ch7pABT.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'>Gold & Below</p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/Valorant/leagues/victoris-leagues/vrs'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        <a href='https://www.usync.gg/games/Valorant/leagues'>
                        <button className='back-button'>Back</button>
                    </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Frontpage_Val_Victoris;