import "../App.css";

const computerPic = new URL("../images/computer.png", import.meta.url)
const usyncLogo = new URL("../images/Usync-logo.png", import.meta.url)

const Home = () => {
    return (
        <section className="home-top">
            <img src={usyncLogo} alt="Usync-logo" id="usyncLogo"/>
            <h1>Finding esports competitions is challenging. We make finding competition for each game not only simple, but all in one place.</h1>
        </section>
    );
}

export default Home;