import Footer from "../../../Footer";
import '../FAQ.css';
import './Article.css';

const Problem = () => {
    return (
        <div className="background-color">
            <div className="total-container-FAQ">
                <div className="container-fluid">
                    <div className="row FAQ-container">
                        <div className="col-lg-8">
                            <h5 className="purple-text">THE PROBLEM WITH ESPORTS</h5>
                        </div>

                        <div className="col-lg-4">
                            <h5 className="purple-text">OTHER ARTICLES</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 article-border article-background">
                            <h7 className="black-text">The Problem with Esports Today</h7>
                            <p className="white-text">
                                Esports has grown into a billion-dollar industry, yet it remains deeply decentralized. Players,
                                coaches, teams, and organizations struggle to find an all-in-one platform to build
                                relationships, find opportunities, and grow their competitive careers. The lack of community
                                and accessibility is one of the biggest issues facing the esports community today. Often, you
                                may find yourself searching things on google such as “how do I join an esports tournament?”
                                or “how do people join esports teams?” or even “how do I sign up for esports?” This is for the
                                lack of accessibility of one solo platform but with uSync, we're here to combine it all.
                            </p>
                            <br />

                            <p className="white-text">
                                Typically, anyone interested in esports is forced to look through multiple websites to find
                                tournaments, leagues, or competitive events that aren't near you or aren't all in one place.
                                Whether you're a player searching for a reliable competition, a team looking for recruits, or a
                                coach scouting talent, the process is very inefficient and takes a lot of time.
                            </p>
                            <br />
                            
                            <p className="white-text">
                                Esports is more compartmentalized than ever. Tournaments are scattered across various
                                websites, each with different formats, rules, and registration processes. This lack of
                                centralization makes it difficult for individuals and organizations to navigate the space
                                efficiently. Instead of fostering collaboration and growth, this fragmentation slows down the
                                industry's progress, making it harder for new and existing participants to engage with the
                                competitive scene which would allow for it to grow.
                            </p>
                            <br />

                            <p className="white-text">
                                If you've ever found yourself searching for "LANs near me," or “upcoming LANs near me,” or
                                just plainly struggling to locate local esports tournaments, you're not alone. This is where
                                uSync comes in. Recognizing these problems, uSync has developed a unified esports
                                platform designed to streamline the competitive experience for everyone involved. We offer a
                                solution that brings together leagues, LANs, online tournaments, wagers, and head-to-head
                                competitions all in one place, saving users time and effort while fostering a true esports
                                community. You'll never have to search for LANs near you or have to worry about searching
                                for esports events across multiple sites. We Sync so uSync!
                            </p>
                        </div>

                        <div className="col-lg-4">
                            <div className="article-border">
                                <div className="other-articles">
                                    <div className="bright-text">
                                        <a href="http://localhost:3000/more/FAQ/How-We-Fix-It">HOW WE FIX IT</a>
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

export default Problem;