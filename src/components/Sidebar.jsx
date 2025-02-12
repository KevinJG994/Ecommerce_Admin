import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();

    return (
        <aside>
            <ul className="list-link">
                <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/">
                        Products
                    </Link>
                </li>
                <li className={location.pathname === "/addProduct" ? "active" : ""}>
                    <Link to="/addProduct">
                        Add Products
                    </Link>
                </li>
                <li className={location.pathname === "/about" ? "active" : ""}>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;