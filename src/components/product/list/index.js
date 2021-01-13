import Illustration from '../../../assets/illustration.png';
import './styles.css';

const Product = () => {
    return(
        <div className="product-list col-12">
            <div className="row">
                <div className="col-3">
                    <img src={Illustration} className="img-fluid"/>
                </div>
                <div className="col-6">
                    <small>
                        <h6>
                            <label className="badge badge-primary">R$30,00</label>
                        </h6>
                        <b>Kit 20 X Parafuso Sextavado M6 X 20 - Aço Inox</b>
                    </small>
                </div>
                <div className="col-3">
                    <button className="btn btn-danger rounded-circle">-</button>
                </div>
            </div>
        </div>
    )
}

export default Product;