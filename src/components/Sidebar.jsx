import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside>
            <ul className="list-link">
                <li>
                    <a href="">Products</a>
                </li>
                <li>
                    <a href="">Add Products</a>
                </li>
                <li>
                    <Link to="/about">
                        <a href="">About</a>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;