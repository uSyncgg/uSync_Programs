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
                <CustomLink className='cLinkText' href="/Games/Cod">CoD</CustomLink>
                <CustomLink className='cLinkText' href="/Games/Halo">Halo</CustomLink>
                <CustomLink className='cLinkText' href="/Games/LoL">League of Legends</CustomLink>
                <CustomLink className='cLinkText' href="/Games/Rl">Rocket League</CustomLink>
                <CustomLink className='cLinkText' href="/Games/Val">Valorant</CustomLink>
                <CustomLink className='cLinkText' href="/Games/Wz">Warzone</CustomLink>
            </CustomLinkDropdown>
            <CustomLink className="cLink" href="/Comingsoon">Coming Soon</CustomLink>
            <CustomLinkDropdown className="cLinkDropdown" title="More">
                <CustomLink className='cLinkText' href="/Verification">Verification</CustomLink>
                <CustomLink className='cLinkText'href="/Eventhost">Event Host</CustomLink>
                <CustomLink className='cLinkText'href="/Contactus">Contact Us</CustomLink>
            </CustomLinkDropdown>
        </ul>
        </nav>
  );
};

const CustomLink = ({ href, children, ...props }) => {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
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
    <li className="dropdown"
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
