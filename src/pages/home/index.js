import './styles.css';
import Header from '../../components/header';
import Vendedor from '../../components/vendedor';
import Map from '../../components/map';

const Home = () =>{
    return(
    <div>
        <Header greenVersion/>
        <div className="container-fluid empresas-list-container">
            <div className="col-12 px-4 text-center">
                <h5>Mais próximos de você (5)</h5>
            </div>
            <ul className="col-12 empresa-list">
                {
                [0,1,2,3,4,5,6,7,8,9].map( (i) =>{
                    return <Vendedor/>
                })
                }
            </ul>
        </div>
        <Map/>
    </div>
    )
}

export default Home;