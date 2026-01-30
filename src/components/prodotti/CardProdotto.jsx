import { Link } from "react-router-dom";

function CardProdotto({ prodotto }) {

    const { title, price, description, category, image, rating, id } = prodotto;

    return (
        <div className="prodotto">
            <div className="immagine-prodotto">
                <img src={image} alt={title} />
            </div>
            <div className="info-prodotto">
                <p className="categoria-prodotto">{category}</p>
                <h3 className="nome-prodotto">{title}</h3>
                <div className="rating-container">
                    <span className="punteggio-prodotto">{rating.rate} punteggio - </span>
                    <span className="recensioni-prodotto">{rating.count} recensioni</span>
                </div>
                {/* per fare in modo che la descrizione non superi i 100 caratteri */}
                <p className="descrizione-prodotto">{description}</p>
                <div className="footer-part">
                    {/* per avere due cifre dopo la virgola */}
                    <p className="prezzo-prodotto">€{Number(price).toFixed(2)}</p>
                    <button className="btn-aggiungi">Aggiungi al carrello</button>
                    {/* uso template literal */}
                    <button className="btn-dettaglio"><Link to={`/prodotti/${id}`}>DettaglioProdotto</Link></button>         
                </div>
            </div>
        </div>
    )
}

export default CardProdotto