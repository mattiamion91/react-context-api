//importo hooks params e useeffect
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
//importo axios
import axios from "axios"
//import comp carddettaglioprodotto
import CardDettaglioProdotto from "../components/prodotti/CardDettaglioProdotto";
//endpoint che dentro la funzione poi dovrá essere dinamico usando il params id
const endpointBase = "https://fakestoreapi.com/products/";

function DettaglioProdotto() {

    //var di stato per salvare info oggeto prodotto
    const [infoProdotto, setInfoProdotto] = useState({})
    //recupero valore dinamico con params
    const { id } = useParams()
    //uso il params id per effettuare la chiamata + funzione di callback anonima - dipendene array vuoto per il montaggio iniziale
    useEffect(() => {
        axios.get(endpointBase + id)
            .then((res) => setInfoProdotto(res.data))
            .catch(err => console.error("Errore nella richiesta", err))
    }, [])

    return (
        <>
            <h1>sei dentro il dettaglio del prodotto</h1>
            <h2>questo é il prodotto {id}</h2>
            <h3>nome del prodotto: {infoProdotto.title}</h3>
            {infoProdotto ?
                (<CardDettaglioProdotto
                    infoProdotto={infoProdotto} />
                ) : (
                    <p className="loader">Loading...</p>
                )
            }

        </>
    )

}

export default DettaglioProdotto
