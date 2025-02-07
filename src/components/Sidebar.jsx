import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside>
            <ul className="list-link">
                <li>
                    <Link to="/">
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="/addProduct">
                        Add Products
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;