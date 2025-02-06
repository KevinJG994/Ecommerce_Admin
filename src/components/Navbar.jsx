import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="menu-container">
                <i class="fa-solid fa-bars"></i>
                <p>Products</p>
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