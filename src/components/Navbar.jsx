function Navbar() {
    return (
        <nav>
            <div className="menu-container">
                <i class="fa-solid fa-bars"></i>
                <p>Products</p>
            </div>
            
            <div className="logo-container">
                <p>KevTech</p>
                <img src="./src/assets/Designer.png" alt="KevTech-logo" />
            </div>
        </nav>
    )
}

export default Navbar;