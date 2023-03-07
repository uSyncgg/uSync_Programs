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
            <CustomLink href="/More">More</CustomLink>
            <CustomLink href="/Games/Cod/Cod_Leagues">Cod Leagues</CustomLink>
            <CustomLink href="/snd_league">SnD League</CustomLink>
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