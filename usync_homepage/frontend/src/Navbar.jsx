import './style.css'
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
          <div className={click ? 'mobile-menu' : 'mobile-menu hide-mobile'}>
            <ul className='mobile-menu-ul'>
                <CustomLink className="cLink-mobile" href="/">Home</CustomLink>
                <CustomLinkDropdown className="cLinkDropdown-mobile" title="Games">
                    <CustomLink className='cLinkText-mobile' href="/games/call-of-duty">Call of Duty</CustomLink>
                    <CustomLink className='cLinkText-mobile' href="/games/halo">Halo</CustomLink>
                    <CustomLink className='cLinkText-mobile' href="/games/LoL">League of Legends</CustomLink>
                    <CustomLink className='cLinkText-mobile' href="/games/RocketLeague">Rocket League</CustomLink>
                    <CustomLink className='cLinkText-mobile' href="/games/Valorant">Valorant</CustomLink>
                    <CustomLink className='cLinkText-mobile' href="/games/warzone">Warzone</CustomLink>
                </CustomLinkDropdown>
                <CustomLink className="cLink-mobile" href="/Comingsoon">Coming Soon</CustomLink>
                <CustomLinkDropdown className="cLinkDropdown-mobile" title="More">
                    <CustomLink className='cLinkText-mobile' href="/more/verification">Verification</CustomLink>
                    <CustomLink className='cLinkText-mobile' href="/more/eventhost">Event Host</CustomLink>
                    <CustomLink className='cLinkText-mobile' href="/more/contactus">Contact Us</CustomLink>
                </CustomLinkDropdown>
            </ul>
          </div>
          <ul className='webpage-ul'>
              <CustomLink className="cLink" href="/">Home</CustomLink>
              <MobileCustomLinkDropdown className="cLinkDropdown" title="Games">
                  <CustomLink className='cLinkText' href="/games/call-of-duty">Call of Duty</CustomLink>
                  <CustomLink className='cLinkText' href="/games/halo">Halo</CustomLink>
                  <CustomLink className='cLinkText' href="/games/LoL">League of Legends</CustomLink>
                  <CustomLink className='cLinkText' href="/games/RocketLeague">Rocket League</CustomLink>
                  <CustomLink className='cLinkText' href="/games/Valorant">Valorant</CustomLink>
                  <CustomLink className='cLinkText' href="/games/warzone">Warzone</CustomLink>
              </MobileCustomLinkDropdown>
              <CustomLink className="cLink" href="/Comingsoon">Coming Soon</CustomLink>
              <MobileCustomLinkDropdown className="cLinkDropdown" title="More">
                  <CustomLink className='cLinkText' href="/more/verification">Verification</CustomLink>
                  <CustomLink className='cLinkText' href="/more/eventhost">Event Host</CustomLink>
                  <CustomLink className='cLinkText' href="/more/contactus">Contact Us</CustomLink>
              </MobileCustomLinkDropdown>
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
      <span className="dropbtn"><i className='fa-solid fa-caret-down'></i>{title}</span>
      {showMenu && (
        <ul className="dropdown-content">{children}</ul>
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
    <li className="dropdown dropdown-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="dropbtn">{title} <i className='fa-solid fa-caret-down'></i></span>
      {showMenu && (
        <ul className="dropdown-content">{children}</ul>
      )}
    </li>
  );
};

export default Navbar;
