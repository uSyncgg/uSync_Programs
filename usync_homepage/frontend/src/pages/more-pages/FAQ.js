import "./FAQ.css";
import Footer from "../../Footer";

const FAQ = () => {
  return (
    <div>
      <div className="total-container-FAQ">
        <div className="container-fluid">
          <div className="row FAQ-container">
            <div className="col-md-4">
              <h4 className="FAQ-header-text">Games</h4>
              <div className="container-border">
                <div className="images-container">
                  <a href="http://localhost:3000/games/halo">
                    <img
                      src="https://i.imgur.com/wqKJfEu.png"
                      alt="Halo Infinite"
                      className="FAQ-img"
                    />
                  </a>
                  <a href="http://localhost:3000/games/call-of-duty">
                    <img
                      src="https://i.imgur.com/CsoQufa.png"
                      alt="Modern Warfare 2"
                      className="FAQ-img"
                    />
                  </a>
                  <a href="http://localhost:3000/games/warzone">
                    <img
                      src="https://i.imgur.com/BIs3u5h.png"
                      alt="Warzone 2"
                      className="FAQ-img"
                    />
                  </a>
                </div>
                <div className="images-container">
                  <a href="http://localhost:3000/games/LoL">
                    <img
                      src="https://i.imgur.com/5riYNow.png"
                      alt="League of Legends"
                      className="FAQ-img"
                    />
                  </a>
                  <a href="http://localhost:3000/games/RocketLeague">
                    <img
                      src="https://i.imgur.com/GJO8JIZ.png"
                      alt="Rocket League"
                      className="FAQ-img"
                    />
                  </a>
                  <a href="http://localhost:3000/games/Valorant">
                    <img
                      src="https://i.imgur.com/Gsl3oIp.png"
                      alt="Valorant"
                      className="FAQ-img"
                    />
                  </a>
                </div>
              </div>

              <h4 className="FAQ-header-text">Socials</h4>
              <div className="container-border">
                <div className="images-container">
                  <a
                    href="https://twitter.com/uSyncGG"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="FAQ-img"
                      src="https://i.imgur.com/YhpeqKK.png"
                      alt="Twitter"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/usyncgg/?next=%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="FAQ-img"
                      src="https://i.imgur.com/YOav7r1.png"
                      alt="Instagram"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@usyncGG"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="FAQ-img"
                      src="https://i.imgur.com/BgGzaKS.png"
                      alt="Youtube"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h4 className="FAQ-header-text">FAQ</h4>
              <div className="FAQ-text-container-top">
                <p className="FAQ-q">Q: How do I sign up for competitions?</p>
                <p className="FAQ-a">
                  A: You can sign up directly from the "Join Now" button on your
                  desired event. From there, you will be redirected to that
                  event's registeration page. If you have any trouble, feel free
                  to{" "}
                  <a
                    className="FAQ-link"
                    href="http://localhost:3000/more/contactus"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                </p>
              </div>
              <div className="FAQ-text-container">
                <p className="FAQ-q">
                  Q: What are the different types of competitions?
                </p>
                <p className="FAQ-a">
                  A: There are 5 types of competitions for each game:
                  Tournaments, Wagers, LANs, Head-to-head, and Leagues. To learn
                  more about each type, check out our video explaining them{" "}
                  <a className="FAQ-link" href="/" target="_blank">
                    Here
                  </a>
                </p>
              </div>
              <div className="FAQ-text-container">
                <p className="FAQ-q">
                  Q: What's the easiest way to navigate the site?
                </p>
                <p className="FAQ-a">
                  A: The best way to navigate the site is either going
                  page-to-page or watching this{" "}
                  <a
                    className="FAQ-link"
                    href="https://www.youtube.com/watch?v=ojWSFWJX4b8"
                    target="_blank"
                  >
                    Short video
                  </a>
                </p>
              </div>
              <div className="FAQ-text-container">
                <p className="FAQ-q">Q: What are the rules?</p>
                <p className="FAQ-a">
                  A: Each game title has a different ruleset based on the
                  gamemode. The best way to find the rules is to check through
                  the provider you are playing for as each has their own
                  variation. Here is an{" "}
                  <a
                    className="FAQ-link"
                    href="https://www.checkmategaming.com/ladder/cross-platform/call-of-duty-modern-warfare-ii/rules"
                    target="_blank"
                  >
                    Example
                  </a>
                </p>
              </div>
              <div className="FAQ-text-container">
                <p className="FAQ-q">Q: How do I post my own event?</p>
                <p className="FAQ-a">
                  A: You can post your own event by submitting an{" "}
                  <a
                    className="FAQ-link"
                    href="http://localhost:3000/more/eventhost"
                    target="_blank"
                  >
                    Event Host
                  </a>{" "}
                  form. Once submitted we will ensure the event is to the uSync
                  standard, and post it within 2-3 business days.
                </p>
              </div>
              <div className="FAQ-text-container">
                <p className="FAQ-q">Q: What is uSync Verified?</p>
                <p className="FAQ-a">
                  A: uSync verified is our way of ensuring the legitimacy of our
                  event hosts. All events with the uSync Verified checkmark have
                  been independently verified by our team to be a safe, and
                  quality competition for all entrants.{" "}
                  <a
                    className="FAQ-link"
                    href="http://localhost:3000/more/verification"
                  >
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <h4 className="FAQ-header-text">Articles</h4>
            <div className="container-border">
              <div className="images-container">
                <a href="/">
                  <img
                    className="FAQ-img-articles"
                    src="https://i.imgur.com/NeuvzkG.png"
                    alt="img"
                  />
                </a>
                <a href="/">
                  <img
                    className="FAQ-img-articles"
                    src="https://i.imgur.com/lLIHnnI.png"
                    alt="img"
                  />
                </a>
                <a href="/">
                  <img
                    className="FAQ-img-articles"
                    src="https://i.imgur.com/0KG2Yd4.png"
                    alt="img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
