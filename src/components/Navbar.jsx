import { NavLink } from "react-router-dom";
// importo il mio hook per la gestione del budgetmode
import { useBudget } from "../contexts/BudgetContext";


function Navbar() {

    //consumo il contesto
    const { budgetMode, setBudgetMode } = useBudget()

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
            {/* Bottone per attivare/disattiva la modalità budget */}
            <button
                // al click il setter mi riporta il booleano opposto di quello che ho ora - toggle - 
                onClick={() => setBudgetMode(!budgetMode)} 
            >
                {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
            </button>
        </nav>
    )
}

export default Navbar