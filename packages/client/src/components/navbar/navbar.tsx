import { NavbarLink } from "./navbarElements";
import "./navbar.css";

const Navbar = () =>
{
    return (
        <div className="navbar">
            <NavbarLink>Home</NavbarLink>
            <NavbarLink>Register</NavbarLink>
            <NavbarLink>About Me</NavbarLink>
        </div>
    )
}

export default Navbar;