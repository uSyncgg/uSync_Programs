import './style.css'
import { useState } from 'react';

const navbarLogo = new URL("./website_images/home-images/usync-navbar-logo.png", import.meta.url)

const Navbar = () => {
  // const path = window.location.pathname;
  // If you are adding something to the navbar simply add a <CustomLink href="custompath">Page name</CustomLink> to the ul tag
  return (
        <nav className="nav">
          <a href="/" className="site-title">
              <img src={navbarLogo} alt="USYNC logo" />
          </a>
          <ul>
              <CustomLink className="cLink" href="/">Home</CustomLink>
              <CustomLinkDropdown className="cLinkDropdown" title="Games">
                  <CustomLink className='cLinkText' href="/games/call-of-duty">CoD</CustomLink>
                  <CustomLink className='cLinkText' href="/games/Halo">Halo</CustomLink>
                  <CustomLink className='cLinkText' href="/games/LoL">League of Legends</CustomLink>
                  <CustomLink className='cLinkText' href="/games/RocketLeague">Rocket League</CustomLink>
                  <CustomLink className='cLinkText' href="/games/Valorant">Valorant</CustomLink>
                  <CustomLink className='cLinkText' href="/games/Warzone">Warzone</CustomLink>
              </CustomLinkDropdown>
              <CustomLink className="cLink" href="/Comingsoon">Coming Soon</CustomLink>
              <CustomLinkDropdown className="cLinkDropdown" title="More">
                  <CustomLink className='cLinkText' href="/more/verification">Verification</CustomLink>
                  <CustomLink className='cLinkText'href="/more/eventhost">Event Host</CustomLink>
                  <CustomLink className='cLinkText'href="/more/contactus">Contact Us</CustomLink>
              </CustomLinkDropdown>
          </ul>
        </nav>
  );
};

const CustomLink = ({ href, children, ...props }) => {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <a id="navbarLink" href={href} {...props}>
        {children}
      </a>
    </li>
  );
};

const CustomLinkDropdown = ({ title, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <li className="dropdown dropdown-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="dropbtn">{title}</span>
      {showMenu && (
        <ul className="dropdown-content">{children}</ul>
      )}
    </li>
  );
};

export default Navbar;
