import { Link } from "react-router-dom";


function NotFoundPage() {
    return (
        <div className="pageNotFound">
            <h2>Page not found</h2>
            <img src='./src/assets/404_wallpaper.jpg' alt="notFoundPage" />
            <Link to="/">
                <button>Go back</button>
            </Link>
        </div>
    )
}

export default NotFoundPage;