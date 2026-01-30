import { NavLink } from "react-router-dom";

function Navbar() {

    // dati per generazione voci menù
    const links = [
        { path: '/', label: 'Homepage' },
        { path: '/chisiamo', label: 'Chi siamo' },
        { path: '/prodotti', label: 'I nostri Prodotti' }
    ]

    return (
        <nav className="mainNav">
            <ul>
                {links.map((link, i) => (
                    <li key={i}>
                        <NavLink to={link.path}>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar