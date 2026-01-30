import CardProdotto from "./CardProdotto";

function ListaProdotti({ prodotti }) {
    
    return (
        <div className="container">
            <h1>Lista Prodotti</h1>
            <div className="lista-prodotti">
                {prodotti.map(prodotto => (
                    <CardProdotto
                        key={prodotto.id}
                        prodotto={prodotto}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListaProdotti