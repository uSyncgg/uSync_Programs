import '../../Info.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../../Footer';

const Contactus = () => {
    return (
        <div>
            <body id='league-body1'>
                <header>
                        <img src="https://i.imgur.com/0Wrn8wp.png" className='Header-Img' />
                        <a href='https://twitter.com/uSyncGG'target='_blank' rel='noopener noreferrer'><img src="https://i.imgur.com/oS43wb8.png" className='twitter-contact'/></a>
                        <a href='https://www.instagram.com/usyncgg/'target='_blank' rel='noopener noreferrer'><img src="https://i.imgur.com/9VJzdPs.png" className='instagram-contact'/></a>
                        <a href='https://www.youtube.com/@usyncGG'target='_blank' rel='noopener noreferrer'><img src="https://i.imgur.com/zlUggwt.png" className='youtube-contact'/></a>
                        <a href='https://www.twitch.tv/usyncgg'target='_blank' rel='noopener noreferrer'><img src="https://i.imgur.com/xATJ11Q.png" className='twitch-contact'/></a>
                </header>
                <div className='Background-mid-contact'>
                    <div>
                    <h1 className='event-title-contactus'>Find Us</h1>
                        <img src="https://i.imgur.com/eNhKhTI.png" className='Underline-h-verification-event' />
                    </div>
                    <div className='container'>
                        <div className='row' id='verif-row'>
                            <div className='col-8 offset-2'>
                                <h1 className='info-title-contactus'>At uSync we strive to bring all of the tournaments, leagues, LANs, 
                                and more to one easy and accessible place. You won't have to waste your time going from site to site or endlessly 
                                scrolling on Twitter/Discord just to find competition. By utilizing the supported events on our website, you have 
                                access to all of the esports competitions in one simple place. We are the game hub of competitive titles across 
                                all of esports!</h1>
                                <h1 className='event-title-contactus2'>About Us</h1>
                        <img src="https://i.imgur.com/eNhKhTI.png" className='Underline-h-verification-event2' />
                                <h1 className='info-title-contactus2'>Our founders played competitive esports in both the amateur and collegiate 
                                level. uSync was founded after noticing that esports is extremely disorganized and in some circumstances 
                                impossible to find information without knowing the right people. Our vision is to solve this by allowing all 
                                events to be shown in one place, so everyone can participate in as many events as they desire.</h1>
                                <img src="https://i.imgur.com/47yLm7t.png" className='jake-image'/>
                                <h1 className='cofounder-title-jake'>Jake Bruscino</h1>
                                <h1 className='cofounder-title-jake1'>CEO / Co-Founder</h1>
                                <img src="https://i.imgur.com/cBWEv6G.png" className='matt-image'/>
                                <h1 className='cofounder-title-matt'>Matthew O'Connor</h1>
                                <h1 className='cofounder-title-matt1'>Co-Founder</h1>
                                <img src="https://i.imgur.com/MHnmk8V.png" className='mason-image'/>
                                <h1 className='cofounder-title-mason'>Mason Wiley</h1>
                                <h1 className='cofounder-title-mason1'>Co-Founder</h1>
                            </div>

                        </div>
                    </div>

                </div>
            </body>
            <Footer />
        </div>

    );
}
export default Contactus;