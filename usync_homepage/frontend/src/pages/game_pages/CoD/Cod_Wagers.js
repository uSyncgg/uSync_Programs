import './Cod.css'
import Footer from '../../../Footer';
const Cod_Wagers = () => {
    return (
        <div>
            <header id='League-header'>
                <img src="https://i.imgur.com/DoXBmLT.png" className='Header-Img-l' />
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
                                <a href='http://localhost:3000/games/call-of-duty/wagers/cmg'>
                                    <h1 className='Leagueh1'>Checkmate Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/wagers/cmg"><img src="https://i.imgur.com/e9CIHsR.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/call-of-duty/wagers/cmg'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/call-of-duty/wagers/eagent'>
                                    <h1 className='Leagueh1'>Esports Agent</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/wagers/eagent"><img src="https://i.imgur.com/XQtN0sp.png" className='league-img' /></a>
                                    <a href="https://www.usync.gg/more/verification"><img src="https://i.imgur.com/PCHIHQB.png" title="uSync Verified" className='over-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/call-of-duty/wagers/eagent'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />


                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/call-of-duty/wagers/oneup'>
                                    <h1 className='Leagueh1'>One Up (App)</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/wagers/oneup"><img src="https://i.imgur.com/ExuRlsG.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/call-of-duty/wagers/oneup'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>


                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/call-of-duty/wagers/dropin'>
                                    <h1 className='Leagueh1'>Drop-In Gaming</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/wagers/dropin"><img src="https://i.imgur.com/78DWiv0.png" className='league-img' /></a>
                                    <p className='Leaguep'></p>
                                </div>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/call-of-duty/wagers/dropin'>
                                    <button type="submit" className='info-button'>More Info</button>
                                </a>
                            </div>
                        </div>
                        <p className='hr' />
                        
                        <div className='col-lg-6'>
                            <div className='league'>
                                <a href='http://localhost:3000/games/call-of-duty/wagers/1v1me'>
                                    <h1 className='Leagueh1'>1v1 Me (App)</h1>
                                </a>
                                <div className='parent'>
                                    <a href="http://localhost:3000/games/call-of-duty/wagers/1v1me"><img src="https://i.imgur.com/d2KuuJE.png" className='league-img' /></a>
                                </div>
                                <p className='Leaguep'></p>
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <a href='http://localhost:3000/games/call-of-duty/wagers/1v1me'>
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

export default Cod_Wagers;