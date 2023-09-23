import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary mb-5" data-bs-theme="dark">
            <div className="container">
                <Link to={'/'} className="navbar-brand" >Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to={'/'} className="nav-link active" aria-current="page" >Home</Link>
                        <Link to="#" className="nav-link" >Features</Link>
                        <a className="nav-link" href="#">Pricing</a>
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;