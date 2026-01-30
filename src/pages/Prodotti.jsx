import ListaProdotti from "../components/prodotti/ListaProdotti"
import axios from "axios"
import { useState, useEffect } from "react"

const endpoint = "https://fakestoreapi.com/products";

function Prodotti() {

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


    return (
        <>
            <h2>sono la pagina prodotti</h2>
            <ListaProdotti
                prodotti={prodotti} />
        </>
    )

}

export default Prodotti
