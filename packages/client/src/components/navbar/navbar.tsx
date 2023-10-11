import { NavbarLink } from "./navbarElements";
import "./navbar.css";

const Navbar = () =>
{
    return (
        <header>
            <div className="navbar">
                <NavbarLink>Home</NavbarLink>
                <NavbarLink>Register</NavbarLink>
                <NavbarLink>About Me</NavbarLink>
            </div>
        </header>
    )
}

export default Navbar;