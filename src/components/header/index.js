import Logo from '../../assets/Logo.png'
import LogoGreen from '../../assets/LogoGreen.png'

const Header = ({greenVersion}) =>{
    return (
        <div className="col-12">
            <header className="py-4 px-4 text-center">
                <img src={greenVersion ? LogoGreen : Logo} className="img-fluid" />
            </header>        
        </div>
    )
}

export default Header;