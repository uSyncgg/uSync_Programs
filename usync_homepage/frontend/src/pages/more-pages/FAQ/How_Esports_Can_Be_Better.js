import Footer from "../../../Footer";
import '../FAQ.css';
import './Article.css';

const Better = () => {
    return (
        <div className="background-color">
            <div className="total-container-FAQ">
                <div className="container-fluid">
                    <div className="row FAQ-container">
                        <div className="col-lg-8">
                            <h5 className="purple-text">HOW ESPORTS CAN BE BETTER</h5>
                        </div>

                        <div className="col-lg-4">
                            <h5 className="purple-text">OTHER ARTICLES</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 article-border article-background">
                            <h7 className="black-text">How Esports Can Be Better: Transforming the Community and the Industry</h7>
                            <p className="white-text">
                                Esports has come a long way, evolving into a multi-billion-dollar industry with millions of
                                fans worldwide. From League of Legends esports to Valorant esports, the competitive
                                gaming scene is stronger than ever. However, there's still room for growth, both for the
                                community and the industry at large. The biggest challenge lies in unifying esports under a
                                centralized platform that benefits players, teams, and organizations alike. That's where
                                uSync comes in.
                            </p>

                            <h7 className="black-text">A Centralized Hub for Esports Events</h7>
                            <p className="white-text">
                                uSync changes the game by offering a centralized esports hub where players and
                                organizations can easily discover and join competitive events. Whether you're a die-hard
                                Rocket League esports player, looking for a solidified Call of Duty league, or trying to keep up
                                with the latest tournaments, uSync has everything.
                            </p>

                            <h7 className="black-text">How uSync Strengthens the Esports Community</h7>
                            <p className="white-text">
                                The esports community is built on passion, but it's also filled with barriers that prevent
                                growth. Finding competitive leagues, casual tournaments, or upcoming events shouldn't be
                                an exhausting process.
                            </p>

                            <h7 className="black-text">Supporting All Levels of Competition</h7>
                            <p className="white-text">
                                From beginner or amateur players looking to hone their skills to esports organizations
                                seeking professional-level events, uSync provides every level of competition. We offer
                                structured leagues, casual head-to-heads, and secure wagers ensuring that players and
                                teams of all skill levels have a place to grow and compete.
                            </p>

                            <p className="black-text">Through uSync, players can:</p>
                            <ul>
                                <li className="white-text">
                                    Discover and join plenty of leagues across top esports games like League of Legends,
                                    Valorant, and Counter-Strike 2, and many more.
                                </li>
                                <li className="white-text">
                                    Find high-quality upcoming tournaments in one place.
                                </li>
                                <li className="white-text">
                                    And plenty of other features.
                                </li>
                            </ul>
                            <p className="white-text">
                                A strong community also means creating a smoother path for beginner players to try
                                competitive esports. uSync makes it easier for tournament hosts to attract new players,
                                ensuring that competitions remain active, well-organized, and engaging for all skill types.
                            </p>
                            <br />

                            <h7 className="black-text">How uSync Improves the Esports Industry</h7>
                            <ul>
                                <li className="white-text">
                                    Better Event Visibility - Many competitive platforms lack proper event discovery.
                                    uSync helps hosts connect with a larger audience and attract committed players.
                                </li>
                                <li className="white-text">
                                    Stronger Competitive Structure
                                </li>
                                <li className="white-text">
                                    uSync ensures that verified esports events are better organized and more
                                    transparent.
                                </li>
                                <li className="white-text">
                                    A Home for Esports Events - Instead of searching through multiple platforms, players
                                    can find verified and high-quality hosted events all in one place.
                                </li>
                            </ul>
                            <br />

                            <h7 className="black-text">The Future of Esports with uSync</h7>
                            <p className="white-text">
                                From helping players join leagues to providing better visibility for tournament hosts, uSync is
                                the missing piece in the esports puzzle. If esports is to reach its full potential, it must be more
                                accessible, streamlined, and community-driven—and uSync is leading that change.
                            </p>

                            <p className="white-text">
                                Join uSync today and be part of the next evolution of esports.
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
                                        <a href="http://localhost:3000/more/FAQ/How-We-Fix-It">HOW WE FIX IT</a>
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

export default Better;