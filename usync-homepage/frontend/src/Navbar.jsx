import "./style.css"

const navbarLogo = new URL("./website_images/home-images/usync-navbar-logo.png", import.meta.url)

const Navbar = () => {
    const path = window.location.pathname;
    return  <nav className="nav">
        <a href="/" className="site-title"><img src={navbarLogo} alt="USYNC logo" /></a>
        <ul>
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/Games">Games</CustomLink>
            <CustomLink href="/Comingsoon">Coming Soon</CustomLink>
            <CustomLink href="/Verification">Verification</CustomLink>
            <CustomLink href="/Becomeverified">Become Verified</CustomLink>
            <CustomLink href="/Eventhost">Event Host</CustomLink> 
            <CustomLink href="/Contactus">Contact Us</CustomLink> 
        </ul>
    </nav> 
}

const CustomLink = ({ href, children, ...props}) => {
    const path = window.location.pathname;
    console.log(window.location.pathname)
    return (
        <li className = {path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    );
}

export default Navbar;