import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="my-5 d-flex align-items-center justify-content-center gap-5">
            <h1>MY SHOP🛒</h1>
            <nav className="nav">
                <NavLink className="header-link" to="/">
                    Home🏠
                </NavLink>
                <NavLink className="header-link" to="/products">
                    Products📦
                </NavLink>
                <NavLink className="header-link" to="/about-us">
                    About Usℹ️
                </NavLink>
            </nav>
        </header>
    );
}
