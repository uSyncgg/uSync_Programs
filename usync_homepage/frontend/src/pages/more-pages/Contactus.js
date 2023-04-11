import shortBar from "../../website_images/home-images/short_underline.png"
import twitter from "../../website_images/home-images/twitter.png"
import instagram from "../../website_images/home-images/instagram.png"
import youtube from "../../website_images/home-images/youtube.png"
import twitch from "../../website_images/home-images/twitch.png"
import gofundme from "../../website_images/home-images/gofundme.png"
import gmail from "../../website_images/home-images/gmail.png"
import Footer from '../../Footer';

const Contactus = () => {
    return (
        <div className="container">
            <div className="find-us">
                <h1>Find Us</h1>
                <img src={shortBar} alt="shortbar" />
            </div>
            <div className="socials">
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
                <img src={youtube} alt="youtube" />
                <img src={twitch} alt="twitch" />
            </div>
            <div className="contact-us-text">
                <h4>
                    At uSync we strive to bring all of the tournaments, leagues, LANs, and more to one easy 
                    and accessible place. You won't have to waste your time going from site to site or endlessly 
                    scrolling on Twitter/Discord just to find competition. By utilizing the supported events on 
                    our website, you have access to all of the esports competitions in one simple place. We are the
                    game hub of competitive titles across all of esports!
                </h4>
                <br />
                <hr />
                <br />
            </div>
            <div className="support-us">
                <h1>Support Us</h1>
                <img src={shortBar} alt="short-bar" />
                <br />
                <br />
                <img src={gofundme} alt="goFundMe" id="contact-us-gfm" />
                <p>Support Our Vision</p>
                <br />
                <hr />
                <br />
            </div>
            <div className="contact-us-event-host">
                <h1>Event Host?</h1>
                <img src={shortBar} alt="short-bar" />
                <br />
                <br />
                <div className="row">
                    <div className="col-3">
                        <img src={gmail} alt="gmail" id="contact-us-gmail" />
                        <p>Email Us!</p>
                    </div>
                    <div className="col-9">
                        <p id="contact-us-event-host-p">
                            We support plenty of different events/websites but may miss a few from time to time in 
                            our search to support all games. If you are interested in working with us, click <a href="/">HERE</a>
                             to learn more!
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <hr />
                <br />
            </div>
            <div className="about-us">
                <h1>About Us</h1>
                <img src={shortBar} alt="short-bar" />
                <br />
                <br />
                <p>
                    Our founders played competitive esports in both the amateur and collegiate level. uSync was founded
                    after noticing that esports is extremely disorganized and in some circumstances impossible to find 
                    information without knowing the right people. Our vision is to solve this by allowing all events to 
                    be shown in one place, so everyone can participate in as many events as they desire.
                </p>
                <br />
                <br />
                <div className="row">
                    <div className="col-4">
                        <img src={youtube} alt="Jake" id="jake-headshot" />
                        <h2>Jake Bruscino</h2>
                        <br />
                        <h3>CEO & Co-founder</h3>
                    </div>
                    <div className="col-4">
                        <img src={youtube} alt="Matthew" id="matt-headshot" />
                        <h2>Matthew O'Connor</h2>
                        <br />
                        <h3>Co-founder</h3>
                    </div>
                    <div className="col-4">
                        <img src={youtube} alt="Mason" id="mason-headshot" />
                        <h2>Mason Wiley</h2>
                        <br />
                        <h3>Co-founder</h3>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <br />
            </div>
            <Footer/>
        </div>
    )
}

export default Contactus