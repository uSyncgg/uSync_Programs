import '../../Info.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../Footer';

const Verification = () => {
    return (
        <div>
            <body id='league-body'>
                <header>
                    <img src="https://i.imgur.com/mViTltX.png" className='Header-Img' />
                </header>
                <div className='Background-mid-veri'>
                    <div>
                        <img src="https://i.imgur.com/PCHIHQB.png" className='Checkmark-check'/>
                        <img src="https://i.imgur.com/0MPIBOK.png" className='Checkmark-notcheck'/>
                        <img src="https://i.imgur.com/OSMYolc.png" className='Checkmark-title-verification'/>
                        <img src="https://i.imgur.com/eNhKhTI.png" className='Underline-h-verification' />
                    </div>
                    <div className='container'>
                        <div className='row' id='verif-row'>
                            <div className='col-8 offset-2'>
                                <h1 className='info-title-verification'>uSync Verified providers are some of the most trustworthy providers that we 
                                feature. These events are not only extremely well trusted but have shown a record of exceptional quality in their 
                                work. We strive to verify as many events as possible so that you can bring your organization to the highest level 
                                of competitive play.</h1>
                            </div>
                        </div>
                    </div>
                    <header>
                    <h1 className='verified-title'>Verified Features</h1>
                    <img src="https://i.imgur.com/eNhKhTI.png" className='Underline-h-verification-2' />
                </header>
                    <div className='container'>
                        <div className='row' id='league-row'>
                            <div className='col-8 offset-2' id='league-info'>
                                <li className='info-title-veri'>uSync Verified Badge</li>
                                <li className='info-title-veri'>Choose where your event is located on the page</li>
                                <li className='info-title-veri'>Choose the header image </li>
                                <li className='info-title-veri'>Custom and up to date information</li>
                                <li className='info-title-veri'>Dynamic link to participate in events</li>
                                <li className='info-title-veri'>Access to our verified support team</li>
                                <li className='info-title-veri'>Social media promotions</li>
                                <li className='info-title-veri'>Ability to sell event passes</li>
                            </div>
                        </div>
                    </div>
                    <a href='https://www.usync.gg/games/call-of-duty/leagues'>
                        <button className='verified-button'>Become Verified</button>
                    </a>

                </div>
            </body>
            <Footer />
        </div>

    );
}
export default Verification;