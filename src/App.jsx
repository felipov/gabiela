import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home';
import Galeria from './pages/Galeria';

export default function App () {
    return (
        <BrowserRouter>
            {<NavBar />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gabileria" element={<Galeria />} />
            </Routes>
        </BrowserRouter>
    )
}