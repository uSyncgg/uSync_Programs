import verX from "../../website_images/verification-images/verification-x.png"
import verCheck from "../../website_images/verification-images/verification-check.png"
import usyncLogo from "../../website_images/home-images/letter_logo.png"
import shortBar from "../../website_images/home-images/short_underline.png"



const Verification = () => {
    return (
        <div>
            <div className="verification-background-top">
                <span className="row">
                        <img src={verX} alt="x-logo" width="300px" height="200px" id="ver-x-image"/>
                        <img src={verCheck} alt="check-logo" width="300px" height="200px" id="ver-check-image" />
                </span>
            </div>
            <div className="usync-verified">
                <div className="usync-verified-header">
                    <h1><img src={usyncLogo} alt="usync-logo" id="usync-logo-verified" />Verified</h1> 
                </div>
                <div className="usync-verified-header-underline">
                    <img src={shortBar} alt="short bar" className="short-bar"/>
                </div>
                <div>
                    <h2> uSync Verified providers are some of the most trustworthy providers that we feature. These events are not only extremely well trusted but have shown a record of exceptional quality in their work. We strive to verify as many events as possible so that you can bring your organization to the highest level of competitive play. </h2>
                </div>
            </div>
            <div className="verified-features">
                <h1 id="verified_features">Verified Features</h1>
                <img src={shortBar} alt="short bar" className="short-bar"/>
                    <ul>
                        <li><h1>Usync Verified Badge</h1></li>
                        <li><h1>Choose where your event is located on the page</h1></li>
                        <li><h1>Choose the images you would like to use for your brand</h1></li>
                        <li><h1>Custom and up to date information</h1></li>
                        <li><h1>Dynamic link to participate in events</h1></li>
                        <li><h1>Access to our verified support team</h1></li>
                        <li><h1>Social media promotions</h1></li>
                    </ul>
            </div>
            <br />
            <div className="become-verified">
                <button type="button" className="btn btn-primary" id="become-verified">Become Verified</button> 
            </div>
            <br />
            <hr />
            <br />
            <div className="host-events">
                <h2>Looking to post an event? Send an <a href="/">Event Submission</a></h2>
            </div>
        </div>
        
    )
}

export default Verification;