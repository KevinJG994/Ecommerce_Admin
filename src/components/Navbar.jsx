
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const navTag = location.pathname === "/" ? "Products" :
                   location.pathname === "/addProduct" ? "Add Product" :
                   location.pathname === "/about" ? "About" : "";

    return (
        <nav>
            <div className="menu-container">
                <i className="fa-solid fa-bars"></i>
                <p>{navTag}</p>
            </div>

            <div className="logo-container">
                <Link to="/">
                    <img src="./src/assets/KevTech.png" alt="KevTech-logo" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;