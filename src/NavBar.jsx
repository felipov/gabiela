import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

export default function NavBar() {
    const [hovered, setHovered] = useState(false);

    return (
    <header className="header">
    <img src="/gabiela.jpg" className="gabielaicon"/>
    <span className="gabiela">gabiela</span>
    <nav className="menu">
        <Link to="/">inicio</Link>
        <Link to="/gabileria">gabileria</Link>
        <div
        className = "social-media"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <Link to="#">redes sociais</Link>

        {hovered && (
            <div className="menu-social-media">
                <a href="https://tiktok.com/@gabiuwubs" className="tiktok">TikTok</a>
                <a href="#" className="discord">Discord</a>
                <a href="#" className="twitter">Twitter</a>
            </div>)}
        </div>
    </nav>
    </header>
    )
}