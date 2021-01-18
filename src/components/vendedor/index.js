import './styles.css';

const Vendedor = () =>{
    return(
        <li className="vendedor d-inline-block">
            <div className="d-inline-block">
                <img 
                src="https://media-exp1.licdn.com/dms/image/C560BAQHUpJAPmga53w/company-logo_200_200/0?e=2159024400&v=beta&t=j3gLsTiKH3NChAd2CuoaD6L3Ct1nhVnzC85ivGL_8po"
                className="img-fluid"
                alt="imagem do armazem">
            </img>
            </div>
            <div className="d-inline-block pl-3 align-center">
                <b className="nome-empresa">Palma Parafusos</b>

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
                   
        </li>
    )
}

export default Vendedor;