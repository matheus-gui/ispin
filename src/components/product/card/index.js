import './styles.css';

const Product = () => {
    return (
        <div className="product col-3">
            <img src="https://http2.mlstatic.com/D_NQ_NP_651061-MLB40352269391_012020-O.webp"/>
            <button className="btn btn-success rounded-circle">+</button>
            <h4>
                <label className="badge badge-secondary">R$90,00</label>
            </h4>
            <small>
                <b>Kit 3 Brocas Escalonadas Cônica Titanio Aço Hss + Brinde</b>
            </small>
        </div>
    )
}

export default Product;