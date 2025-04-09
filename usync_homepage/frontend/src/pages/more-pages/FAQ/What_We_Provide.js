import Footer from "../../../Footer";
import '../FAQ.css';
import './Article.css';

const Provide = () => {
    return (
        <div className="background-color">
            <div className="total-container-FAQ">
                <div className="container-fluid">
                    <div className="row FAQ-container">
                        <div className="col-lg-8">
                            <h5 className="purple-text">WHAT WE PROVIDE</h5>
                        </div>

                        <div className="col-lg-4">
                            <h5 className="purple-text">OTHER ARTICLES</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 article-border article-background">
                            <h7 className="black-text">What We Provide</h7>
                            <p className="white-text">
                                At uSync, we are revolutionizing the way the esports community connects, competes, and thrives. We
                                provide a one-stop hub for everything esports, eliminating the need for players, teams, coaches, and
                                organizations to search across multiple platforms. Our platform simplifies the entire esports
                                ecosystem by concentrating tournaments, events, and competitions all into one place.
                            </p>

                            <h7 className="black-text">Platforming Tournaments</h7>
                            <p className="white-text">
                                uSync offers a fully integrated tournament hosting system, featuring leagues, LANs, online
                                tournaments, and wagers. If you've ever searched for "how to find local LAN tournaments" or "where to
                                compete in esports", uSync makes it easy to discover and participate in these well looked for
                                competitive events. Say goodbye to endless Google searches—uSync provides a smart, searchable
                                platform for ongoing and upcoming events all in one space.
                            </p>

                            <h7 className="black-text">Verified Hosting and Secure Competition</h7>
                            <p className="white-text">
                                Unlike other platforms, uSync provides a safe, verified environment for esports competition. At uSync,
                                we have a variety of verified hosts you can trust to complete fair payouts, fair rules, unbiased admins,
                                and overall a safe to play environment for those that want to improve their skill.
                            </p>

                            <h7 className="black-text">Helping You Find LANs Near You</h7>
                            <p className="white-text">
                                For anyone typing "LANs near me", "local call of duty tournaments", or "how to join a LAN event" into
                                google, uSync is the answer you are looking for. Instead of bouncing between different event websites
                                and social media pages, our platform consolidates all major esports events into one
                                easy-to-navigate system.
                            </p>

                            <h7 className="black-text">Helping You Find the Best LANs and Events</h7>
                            <p className="white-text">
                                For players searching for "LANs near me", "local gaming tournaments", or "how to compete in
                                esports", uSync offers an easy-to-use platform that connects players to the best local and
                                online events. We make LAN event discovery seamless and competition entry effortless,
                                ensuring that every esports player can find the right opportunity to showcase their skills.
                            </p>
                            <br />

                            <p className="white-text">
                                By providing a tuned, all-in-one solution, uSync is setting a new standard for accessibility and
                                engagement in esports. We are committed to bridging the gaps in the industry, ensuring that players,
                                teams, and professionals connect, compete, and grow like never before.
                            </p>
                        </div>

                        <div className="col-lg-4">
                            <div className="article-border">
                                <div className="other-articles">
                                    <div className="bright-text">
                                        <a href="http://localhost:3000/more/FAQ/The-Problem-With-Esports">THE PROBLEM WITH ESPORTS</a>
                                        <br />
                                        <a href="http://localhost:3000/more/FAQ/How-We-Fix-It">HOW WE FIX IT</a>
                                        <br />
                                        <a href="http://localhost:3000/more/FAQ/How-Esports-Can-Be-Better">HOW ESPORTS CAN BE BETTER</a>
                                        <br />
                                        <a href="http://localhost:3000/more/FAQ/How-to-Join-an-Esports-League">HOW TO JOIN AN ESPORTS LEAGUE</a>
                                    </div>
                                </div>
                            </div>

                            <div className="article-border">
                                <div className="map-img">

                                </div>
                            </div>
                            
                            <div className="article-border">
                                <div className="league-article-img">
                                    <div className="bright-text">
                                        <a href="http://localhost:3000/leagues">CLICK HERE FOR LEAGUES</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Provide;