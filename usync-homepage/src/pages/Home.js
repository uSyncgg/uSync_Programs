import "../App.css";

const usyncLogo = new URL("../images/Usync-logo.png", import.meta.url)

const Home = () => {
    return (
        <section className="home-top">
            <img src={usyncLogo} alt="Usync-logo" id="home-usyncLogo"/>
            <h1 id="finding-esports">Finding esports competitions is challenging. We make finding competition for each game not only simple, but all in one place.</h1>
            <button className="btn btn-primary" type="button" id="get-started">Get Started</button>
            <h1 id="we-sync">We Sync So uSync</h1>
        </section>
    );
}

export default Home;