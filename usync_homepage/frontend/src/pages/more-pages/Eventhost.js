import shortBar from "../../website_images/home-images/short_underline.png"

const Eventhost = () => {
  return (
    <div className="container">
        <div className="our-events">
            <h1>Our Events</h1>
            <img src={shortBar} alt="short bar" />
        </div>
        <div className="event-text">
            <h3>All of our events are taken through a verification process that proves that the event is legitimate and in good standing with payouts (if applicable). 
                At uSync you can trust the events you ar entering without having to do extensive research, we take care of it al for you in one place!</h3>
            <br />
            <h3>We strive to bring as many events as possible to the community and create a hub of competitive esports. However, in our search for competitive events we may miss some. That's why we allow anyone to feature any event of their choosing on the form below! Submit your application today!</h3>
        </div>
        <br />
            <div className="feature-your-event">
                <button type="button" className="btn btn-primary" id="feature-event">Feature Your Event</button> 
            </div>
            <br />
            <hr />
            <br />
            <div className="host-events">
                <h2>Already Featured? Become <a href="/">Verified</a></h2>
            </div>
    </div>
  )
}

export default Eventhost