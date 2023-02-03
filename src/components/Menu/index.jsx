import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/teste-deploy-vite/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/teste-deploy-vite/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu