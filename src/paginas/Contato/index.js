import React from "react";
import './style.css'
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";

function Contato() {
    return (
        <div >
            <Header />
            <section class="d-flex justify-content-center align-items-center altura im">
                <main class="form-signin col-12 cor-secundaria my-5">
                    <div class="row">
                        <div class="offset-4 col-8 con my-5">
                            <h3 >Telefone: (11) 1111-1111</h3>
                            <h3 >WhatsApp: (11) 91111-1111</h3>
                            <h3 >Email: Agencia_viagem@gmail.com</h3>
                            <h3 >Endereco Físico: Rua Avenida Paulista <br></br>
                            Número: 2000 São Paulo-SP</h3>
                            
                        </div>
                    </div>
                </main>
            </section>
            <Footer/>
           </div>

       

    );

} export default Contato;