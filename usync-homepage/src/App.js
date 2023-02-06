import Navbar from './Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Comingsoon from './pages/Comingsoon';
import './App.css';
import More from './pages/More';

const App = () => {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/Games":
      component = <Games />
      break;
    case "/Comingsoon":
      component = <Comingsoon />
      break;
    case "/More":
      component = <More />
      break;
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">{component}</div>
      
    </div>
  );
}
      {/*
      <div className="home-page-top">
        <h1>USYNC</h1>
        <h3>Finding esports competitions is challenging. We make finding competition for each game not only simple, but all in one place.</h3>
        <button type='button' onClick=''>Getting Started</button>
        <h3>We Sync so uSync</h3>
      </div>
      <div className="home-supported-titles">
        <h2>Supported Titles</h2>
        <hr />
      </div>
      <div className="home-lan-events">
        <h2>LAN Events</h2>
        <h6>Learn how to post your LAN to the map <a href='https://www.usync.gg/more/event-host'>here</a></h6>
        <hr />
      </div>
      <div className="home-coming-soon">
        <h2>Coming Soon!</h2>
        <hr />
      </div>
      <div className="home-footer">
        <footer>
          <a href="https://www.usync.gg/more/report-an-error">Report a problem</a>
          <p>usyncgg@gmail.com ©2022 by uSync LLC. <a href='https://www.usync.gg/more/contact-us'>Contact Us</a></p>
          <p>All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners. Version: BETA</p>
        </footer>
      </div>
  */}
    


export default App;
