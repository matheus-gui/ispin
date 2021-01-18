import Header from '../../components/header';
import Illustration from '../../assets/illustration.png'


const Cadastro = () => {
    return ( 
        <div className="container-fluid h-100 bg-primary">
            
            <Header hideCart></Header>

            <div className="row mt-4">
                
                <div className="col-6 text-right my-auto">
                    <img src={Illustration} className="img-fluid mr-4" style={{height:"500px"}} />
                </div>

                <div className="col-6">
                    <div className="box col-8">
                        <h2 className="text-center ">Falta pouco para sua obra ficar pronta.</h2>
                        <br></br>
                        <br></br>
                        <input 
                            type="text"
                            className="form-control form-control-lg mb-3"
                            placeholder="E-mail" 
                        />
                        <input 
                            type="text"
                            className="form-control form-control-lg mb-3"
                            placeholder="Nome Completo" 
                        />
                        <input 
                            type="text"
                            className="form-control form-control-lg mb-3"
                            placeholder="CPF" 
                        />
                        <input 
                            type="date"
                            className="form-control form-control-lg mb-3" 
                            placeholder="Data de Nascimento"
                        />

                        <button className="btn btn-lg btn-block btn-secondary"> Cadastrar </button>
                    </div>
                </div>
            </div>
    </div>
    )
};

export default Cadastro;