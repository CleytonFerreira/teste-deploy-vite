import { Link } from 'react-router-dom'
const baseUrl = "/teste-deploy-vite"

function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu