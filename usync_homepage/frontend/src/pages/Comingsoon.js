import shortBar from '../website_images/home-images/short_underline.png'
import youtube from '../website_images/home-images/youtube.png'
import gofundme from "../website_images/home-images/gofundme.png"

const Comingsoon = () => {
    return (
        <div className="container">
            <div className="coming-soon-header">
                <h1>Coming  Soon</h1>
                <img src={shortBar} alt="short-bar" />
            </div>
            <div className="coming-soon-game-titles">
                <h1>Game Titles</h1>
                <img src={shortBar} alt="short-bar" />
                <br />
                <br />
                <div className="coming-soon-game-img">
                    <img src={youtube} alt="APEX" />
                    <img src={youtube} alt="Smash" />
                    <img src={youtube} alt="Overwatch" />
                </div>
                <br />
                <p>
                    We are actively working on different titles in order to bring the best competition to you. These 
                    take time due to the competitive scenes varying from title to title. Your continued use of our 
                    services allow for us to keep working on new titles for the future. Thank you!
                </p>
                <br />
                <br />
            </div>
            <div className="coming-soon-event-types">
                <h1>Event Types</h1>
                <img src={shortBar} alt="short-bar" />
                <br />
                <img src={youtube} alt="online tournaments" id='coming-soon-online-tournaments'/>
                <br />
                <br />
                <p>
                    We are looking to provide a list of daily tournaments from all of the varying sites so that players don't
                    have to move from site to site to find what they are looking for!
                </p>
                <br />
                <p>
                    Unfortunately, implementing this feature is costly and our services are free which places a heavy burden on us.
                    However, in the meantime keep up to date with what we are working on with our Twitter!
                </p>
                <br />
                <br />
                <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Want to join the ultimate Esports experience? <a href="https://t.co/3nSDIXiWJq">pic.twitter.com/3nSDIXiWJq</a></p>&mdash; uSync (@uSyncGG) <a href="https://twitter.com/uSyncGG/status/1610732508508815360?ref_src=twsrc%5Etfw">January 4, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                <br />
                <br />
                <hr />
                <br />
            </div>
            <div className="coming-soon-support-us">
                <h1>Support Us</h1>
                <img src={shortBar} alt="short-bar" />
                <br />
                <br />
                <img src={gofundme} alt="go fund me" id="coming-soon-gfm"/>
                <p>Support Our Vision</p>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default Comingsoon;