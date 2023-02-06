import "./styles.css"

const Navbar = () => {
    const path = window.location.pathname;
    return  <nav className="nav">
        <a href="/" className="site-title">USYNC</a>
        <ul>
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/Games">Games</CustomLink>
            <CustomLink href="/Comingsoon">Coming Soon</CustomLink>
            <CustomLink href="/More">More</CustomLink>
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