import React from "react";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import './style.css';

function CadastroFurmulario() {
    return (
        <div>
            <Header />
            <div className="container">
                <form className="row g-3 mt-5 cor-secund">
                    <div className="col-1 mt-3">
                        <a href="http://localhost:3000/Home" className="text-white">Voltar</a>
                    </div>
                    <div class="col-10 text-center my-4">
                        <h1 class="display-4 text-white">
                            <strong>Cadastro</strong>
                        </h1>
                    </div>
                    <div class="col-12 my-3">
                        <input type="text" class="form-control" id="inputAddress1" placeholder="Insira seu nome" />
                    </div>
                    <div class="col-12 my-3">
                        <input type="text" class="form-control" id="inputAddress1" placeholder="Insira seu CPF" />
                    </div>
                    <div class="col-12 my-3">
                        <input type="text" class="form-control" id="inputAddress1" placeholder="Insira seu RG" />
                    </div>
                    <div class="col-12 my-3">
                        <input type="date" class="form-control" id="inputAddress1" placeholder="dd/mm/aaaa" />
                    </div>
                    <div class="col-md-4 my-4 text-white">
                        <label for="inputState" class="form-label">Escolha seu sexo</label>
                        <select class="custom-select form-select sexo" id="sexo">
                            <option value="escolha">Escolha...</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outros">Outros</option>
                        </select>
                    </div>
                    <div class="ol-md-4 my-4 text-white col-4">
                        <label for="floatingInput">Email</label>
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    </div><br></br>
                    <div class="ol-md-4 my-4 text-white col-4">
                        <label for="floatingPassword">Senha</label>
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default CadastroFurmulario;