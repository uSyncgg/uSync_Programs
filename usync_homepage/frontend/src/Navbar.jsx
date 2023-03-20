import './style.css';

const navbarLogo = new URL("./website_images/home-images/usync-navbar-logo.png", import.meta.url)

const Navbar = () => {
    // const path = window.location.pathname;
    // If you are adding something to the navbar simply add a <CustomLink href="custompath">Page name</CustomLink> to the ul tag
    return  <nav className="nav">
        <a href="/" className="site-title"><img src={navbarLogo} alt="USYNC logo" /></a>
        <ul>
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/Games">Games</CustomLink>
            <CustomLink href="/Comingsoon">Coming Soon</CustomLink>
            <CustomLink href="/Games/Cod/Cod_Leagues">Cod Leagues</CustomLink>
            <CustomLink href="/snd_league">SnD League</CustomLink>
            <CustomLink href="/Games/Cod">CoD</CustomLink>
            <CustomLink href="/Games/Cod/LANs">CoD LANs</CustomLink>
            <CustomLink href="/Games/Halo/LANs">Halo LANs</CustomLink>
            <CustomLink href="/Games/LoL/LANs">League of Legends LANs</CustomLink>
            <CustomLink href="/Games/Wz/LANs">Warzone LANs</CustomLink>
            <CustomLink href="/NACAL_league">NACAL League</CustomLink>
            <CustomLink href="/Verification">Verification</CustomLink>
            <CustomLink href="/Becomeverified">Become Verified</CustomLink>
            <CustomLink href="/Eventhost">Event Host</CustomLink> 
            <CustomLink href="/Contactus">Contact Us</CustomLink>
            <CustomLink href="/AWL">AWL League</CustomLink>
        </ul>
    </nav> 
}

const CustomLink = ({ href, children, ...props}) => {
    const path = window.location.pathname;

    return (
        <li className = {path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    );
}

export default Navbar;