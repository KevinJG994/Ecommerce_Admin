function AboutPage() {
    return (
        <div className="aboutPanel">
            <h2>Ecommerce Admin Dashboard</h2>
            <p>This application is an eCommerce administration panel designed to efficiently manage products. It allows adding, deleting, and viewing products easily.</p>

            <div className="developer_profile">
                <img src="../src/assets/developer_image.png" alt="developer_image" />
                <h3>Kevin Jiménez</h3>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/kevin-jim%C3%A9nez94/" target="_blank">
                            <i class="fa-brands fa-linkedin"></i>
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/KevinJG994/Ecommerce_Admin" target="_blank">
                            <i class="fa-brands fa-square-github"></i>
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutPage;