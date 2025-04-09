import Footer from "../../../Footer";
import '../FAQ.css';
import './Article.css';

const Fix = () => {
    return (
        <div className="background-color">
            <div className="total-container-FAQ">
                <div className="container-fluid">
                    <div className="row FAQ-container">
                        <div className="col-lg-8">
                            <h5 className="purple-text">HOW WE FIX IT</h5>
                        </div>

                        <div className="col-lg-4">
                            <h5 className="purple-text">OTHER ARTICLES</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 article-border article-background">
                            <h7 className="black-text">How We Fix It</h7>
                            <p className="white-text">
                                The esports industry has long suffered from fragmentation, making it challenging for
                                players, teams, and organizations to navigate the competitive landscape. At uSync, we
                                have developed a game-changing platform that unites the esports community and
                                provides the space needed for long-term success.
                            </p>

                            <h7 className="black-text">Unifying the Esports Landscape</h7>
                            <p className="white-text">
                                The biggest issue in esports today is the lack of a centralized hub. Instead of users being
                                forced to search through multiple sites to find the right tournaments, leagues, or
                                head-to-head matches, uSync combines it all into one platform. By integrating every key
                                aspect of competitive gaming, we ensure that players, teams, and coaches can easily find
                                opportunities that match their needs. We provide you with the best of both worlds in terms
                                of searching for and verifying your next league, LAN, tournament, or more.
                            </p>

                            <h7 className="black-text">Reducing Search Time</h7>
                            <p className="white-text">
                                Before uSync, finding the right competition required hours of searching across multiple
                                websites, Discord servers, and social media posts. If you've ever typed "where to find local
                                esports tournaments" or "how to join a LAN and Esports League", you understand the
                                struggle. Our platform cuts down search time significantly, allowing users to discover and
                                join esports events effortlessly.
                            </p>

                            <h7 className="black-text">Supporting All Levels of Competition</h7>
                            <p className="white-text">
                                From beginner or amateur players looking to hone their skills to esports organizations
                                seeking professional-level events, uSync provides every level of competition. We offer
                                structured leagues, casual head-to-heads, and secure wagers ensuring that players and
                                teams of all skill levels have a place to grow and compete.
                            </p>

                            <h7 className="black-text">Helping You Find the Best LANs and Events</h7>
                            <p className="white-text">
                                For players searching for "LANs near me", "local gaming tournaments", or "how to compete in
                                esports", uSync offers an easy-to-use platform that connects players to the best local and
                                online events. We make LAN event discovery seamless and competition entry effortless,
                                ensuring that every esports player can find the right opportunity to showcase their skills.
                            </p>

                            <h7 className="black-text">The Future of Esports is Here</h7>
                            <p className="white-text">
                                Esports is evolving, and uSync is leading the charge. Our mission is to eliminate the
                                disorganization of the industry, build a strong competitive environment, and create a
                                centralized esports hub that caters to players, teams, coaches, and organizations alike.
                                With our platform and commitment to community building, uSync is setting a new standard
                                for how esports should operate.
                            </p>
                            <br />

                            <p className="white-text">
                                By bringing everything under one roof, we make esports simpler, faster, and more
                                accessible than ever before. If you've been searching for LAN events, competitive
                                tournaments, or reliable esports networking, look no further—join uSync today and be part
                                of the revolution in centralized esports competition.
                            </p>
                        </div>

                        <div className="col-lg-4">
                            <div className="article-border">
                                <div className="other-articles">
                                    <div className="bright-text">
                                        <a href="http://localhost:3000/more/FAQ/The-Problem-With-Esports">THE PROBLEM WITH ESPORTS</a>
                                        <br />
                                        <a href="http://localhost:3000/more/FAQ/What-We-Provide">WHAT WE PROVIDE</a>
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

export default Fix;