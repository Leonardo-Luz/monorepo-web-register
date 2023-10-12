import { NavbarLink } from "./navbarElements";
import "./navbar.css";

const Navbar = () =>
{
    return (
        <header>
            <div className="navbar">
                <NavbarLink link="#" >Home</NavbarLink>
                <NavbarLink link="#">Register</NavbarLink>
                <NavbarLink link="#">About Me</NavbarLink>
            </div>
        </header>
    )
}

export default Navbar;