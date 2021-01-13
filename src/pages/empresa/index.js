import Header from '../../components/header';
import Ferreira from '../../assets/FerreiraCostaLogo.png';
import './styles.css';

const Empresa = ()=> {
    return(
        <div className="h-100">
            <Header greenVersion/>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src={Ferreira} className="img-fluid foto-empresa"></img>
                        <b className="nome-empresa">Ferreira Costa</b>
                        <div className="info-empresa">
                            <text>3,8</text>
                            <span className="mdi mdi-star"></span>
                            <text>$$$</text>
                            <span className="mdi mdi-cash-usd-outline"></span>
                            <text>3km</text>
                            <span className="mdi mdi-crosshairs-gps"></span>
                        </div>
                        <label className="badge badge-success">Frete Grátis</label>
                    </div>
                    <div className="col-10"></div>
                </div>
            </div>
        </div>
    )
}

export default Empresa;