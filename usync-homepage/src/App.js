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
export default App;
