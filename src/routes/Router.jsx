import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Menu from '../components/Menu'

const baseUrl = "/teste-deploy-vite/";

function Router() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route exact path="/teste-deploy-vite/" element={<Home />} />
                <Route exact path="/teste-deploy-vite/home" element={<Home />} />
                <Route exact path="/teste-deploy-vite/about" element={<About />} />
                <Route path="/teste-deploy-vite/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;