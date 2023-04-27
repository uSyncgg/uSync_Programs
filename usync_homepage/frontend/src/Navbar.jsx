import './Navbar.css'
import { useState } from 'react';

const navbarLogo = new URL("./website_images/home-images/usync-navbar-logo.png", import.meta.url)

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  // const path = window.location.pathname;
  // If you are adding something to the navbar simply add a <CustomLink href="custompath">Page name</CustomLink> to the ul tag
  return (
        <nav className="nav">
          <a href="/" className="site-title">
              <img src={navbarLogo} alt="USYNC logo" />
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa-regular fa-circle-xmark' : 'fa-solid fa-bars'}></i>
          </div>
          <div className={click ? 'mobile-menu' : 'hide-mobile'}>
            <ul className='mobile-menu-ul'>
                <CustomLink className="cLink-mobile" href="/">Home</CustomLink>
                <MobileCustomLinkDropdown className="cLinkDropdown-mobile" title="Games">
                    <CustomDropLink className='cLinkText-mobile' href="/games/call-of-duty">Call of Duty</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' href="/games/halo">Halo</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' href="/games/LoL">League of Legends</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' href="/games/RocketLeague">Rocket League</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' href="/games/Valorant">Valorant</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' href="/games/warzone">Warzone</CustomDropLink>
                </MobileCustomLinkDropdown>
                <CustomLink className="cLink-mobile" href="/Comingsoon">Coming Soon</CustomLink>
                <MobileCustomLinkDropdown className="cLinkDropdown-mobile" title="More">
                    <CustomDropLink className='cLinkText-mobile' href="/more/verification">Verification</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' href="/more/eventhost">Event Host</CustomDropLink>
                    <CustomDropLink className='cLinkText-mobile' href="/more/contactus">Contact Us</CustomDropLink>
                </MobileCustomLinkDropdown>
            </ul>
          </div>
          <ul className='webpage-ul'>
              <CustomLink className="cLink" href="/">Home</CustomLink>
              <CustomLinkGameDropdown className="cLinkDropdown" title="Games">
                  <CustomDropLink className='cLinkText' href="/games/call-of-duty">Call of Duty</CustomDropLink>
                  <CustomDropLink className='cLinkText' href="/games/halo">Halo</CustomDropLink>
                  <CustomDropLink className='cLinkText' href="/games/LoL">League of Legends</CustomDropLink>
                  <CustomDropLink className='cLinkText' href="/games/RocketLeague">Rocket League</CustomDropLink>
                  <CustomDropLink className='cLinkText' href="/games/Valorant">Valorant</CustomDropLink>
                  <CustomDropLink className='cLinkText' href="/games/warzone">Warzone</CustomDropLink>
              </CustomLinkGameDropdown>
              <CustomLink className="cLink" href="/Comingsoon">Coming Soon</CustomLink>
              <CustomLinkMoreDropdown className="cLinkDropdown" title="More">
                  <CustomDropLink className='cLinkText' href="/more/verification">Verification</CustomDropLink>
                  <CustomDropLink className='cLinkText' href="/more/eventhost">Event Host</CustomDropLink>
                  <CustomDropLink className='cLinkText' href="/more/contactus">Contact Us</CustomDropLink>
                  <CustomDropLink className='cLinkText' href="/playground">Playground</CustomDropLink>
                  <CustomDropLink className='cLinkText' href="/more/playground-two">Playground Two</CustomDropLink>
              </CustomLinkMoreDropdown>
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

const CustomDropLink = ({ href, children, ...props }) => {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active mNavLink" : "mNavLink"}>
      <a id="navbarDropLink" href={href} {...props}>
        {children}
      </a>
    </li>
  );
};

const CustomLinkGameDropdown = ({ title, children }) => {
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
      <span className="dropbtn">{title} <i className='fa-solid fa-caret-down'></i></span>
      {showMenu && (
        <ul className="dropdown-games-content">{children}</ul>
      )}
    </li>
  );
};

const CustomLinkMoreDropdown = ({ title, children }) => {
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
      <span className="dropbtn">{title} <i className='fa-solid fa-caret-down'></i></span>
      {showMenu && (
        <ul className="dropdown-more-content">{children}</ul>
      )}
    </li>
  );
};

const MobileCustomLinkDropdown = ({ title, children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };
  
  return (
    <li className="dropdown dropdown-wrapper mNavLink"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="dropbtn mNavLink"><i className='fa-solid fa-caret-down'></i>{title}</span>
      {showMenu && (
        <ul className="dropdown-content">{children}</ul>
      )}
    </li>
  );
};


export default Navbar;