import ListaProdotti from "../components/prodotti/ListaProdotti"
import axios from "axios"
import { useState, useEffect } from "react"
//importo hook budgetmode
import { useBudget } from "../contexts/BudgetContext";

const endpoint = "https://fakestoreapi.com/products";

function Prodotti() {

    //consumo il contesto
    const { budgetMode } = useBudget()

    // creiamo var di stato per lista prodotti
    const [prodotti, setProdotti] = useState([]);

    // funzione che al click fa chiamata Ajax verso endpoint API
    function fetchProdotti() {
        axios.get(endpoint)
            .then((res) => setProdotti(res.data))
            .catch(err => console.error("Errore nella richiesta", err))
    }

    //useEffect e senza dipendeze (solo al primo montaggio del comp)
    useEffect(fetchProdotti, []);

    //lista prodotti filtrata che mostra solo prodotto a meno di 30€
    // let prodottiBudget;
    // if (budgetMode === true) {
    //     prodottiBudget = prodotti.filter(prod => prod.price <= 30);
    // } else {
    //     prodottiBudget = prodotti
    // }

    //con opreatore ternario
    const prodottiBudget = budgetMode ? prodotti.filter(prod => prod.price <= 30) : prodotti

    return (
        <>
            <h2>sono la pagina prodotti</h2>
            <ListaProdotti
                prodotti={prodottiBudget} />
        </>
    )

}

export default Prodotti
