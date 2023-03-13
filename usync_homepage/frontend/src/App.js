import Navbar from './Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Comingsoon from './pages/Comingsoon';
import './App.css';
import Verification from './pages/more_pages/Verification';
import Becomeverified from './pages/more_pages/Becomeverified';
import Eventhost from './pages/more_pages/Eventhost';
import Contactus from './pages/more_pages/Contactus';
//import 'bootstrap/dist/css/bootstrap.css'
import './pages/more_pages/Verification.css'
import './pages/more_pages/Eventhost.css'
import './pages/more_pages/Contactus.css'
import './pages/Comingsoon.css'

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
    case "/Verification":
      component = <Verification />
      break;
    case "/Becomeverified":
      component = <Becomeverified />
      break;
    case "/Eventhost":
      component = <Eventhost />
      break;
    case "/Contactus":
      component = <Contactus />
      break;
  }
  return (
    <div className="App">
      <Navbar />
      <div>{component}</div>
    </div>
  );
}
export default App;