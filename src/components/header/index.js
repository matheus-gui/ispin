import Logo from '../../assets/Logo.png'
import LogoGreen from '../../assets/LogoGreen.png'
import {Link} from 'react-router-dom';
import './styles.css';

const Header = ({greenVersion, hideCart}) =>{
    
    const openDrawer = ()=>{
        const event = new CustomEvent('openCart')
        window.dispatchEvent(event);
    }
    
    return (
        <div className="col-12">
            <header className="py-4 px-4 text-center">
                <Link to="/">   
                <img  src={greenVersion ? LogoGreen : Logo} className="img-fluid" />
                </Link>
            </header>
            {!hideCart && (           
            <button onClick={()=> openDrawer()} className="btn btn-secondary cart-button">
                <span className="mdi mdi-cart"></span>
                2 Ítens
            </button>)}        
        </div>
    )
}

export default Header;