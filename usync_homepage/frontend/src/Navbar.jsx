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
            <CustomLink href="/Tournaments">Cod Tournaments</CustomLink>
            <CustomLink href="/Halo_Leagues">Halo Leagues</CustomLink>
            <CustomLink href="/Lol_Leagues">League of Legends Leagues</CustomLink>
            <CustomLink href="/Rl_Leagues">Rocket League Leagues</CustomLink>
            <CustomLink href="/Val_Leagues">Valorant Leagues</CustomLink>
            <CustomLink href="/Wz_Leagues">Warzone Leagues</CustomLink>
            <CustomLink href="/Cod_Wagers">Cod Wagers</CustomLink>
            <CustomLink href="/Halo_Wagers">Halo Wagers</CustomLink>
            <CustomLink href="/LoL_Wagers">LoL Wagers</CustomLink>
            <CustomLink href="/Rl_Wagers">Rl Wagers</CustomLink>
            <CustomLink href="/Wz_Wagers">Wz Wagers</CustomLink>
            <CustomLink href="/Cod_headtohead">cod h2h</CustomLink>
            <CustomLink href="/Halo_headtohead">Halo h2h</CustomLink>
            <CustomLink href="/Lol_headtohead">Lol h2h</CustomLink>
            <CustomLink href="/Val_headtohead">Val h2h</CustomLink>
            <CustomLink href="/Wz_headtohead">WZ h2h</CustomLink>
            <CustomLink href="/HOE_Leagues">HOE Leagues</CustomLink>
            <CustomLink href="/Frontpage_Aegis">AEGIS Leagues</CustomLink>











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