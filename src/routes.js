import { BrowserRouter as Router, Route} from 'react-router-dom';
import Sidebar from './components/sidebar';
import Empresa from './pages/empresa';
import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';

import './styles/global.css';

const Routes = () =>{
    return(
        <>
        <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/empresa" exact component={Empresa}/>
            <Route path="/checkout" exact component={Checkout}/>
            <Route path="/cadastro" exact component={Cadastro}/>
        </Router>
        <Sidebar/>
        </>
    )
}

export default Routes;