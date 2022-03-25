import React from "react";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import './style.css'

function Promocao() {
    return (
        <section>
            <Header />
            <div class="container">
                <div className="col-1 mt-3">
                    <a href="http://localhost:3000/Home" className="text-black">Voltar</a>
                </div>
                <div class="row linha1 ">
                    <div class="col-sm-6 col-md-4 col-lg-4">
                        <img className='imga' src="/img/noronha.jpg" alt="" />
                        <div><br />
                            <p class="d-flex justify-content-center">Fernando de Noronha</p>
                            <h2>R$ 1900,00</h2>
                            <p class="text-justify"> Pacote para Fernando de Noronha, esta incluido passagem de avião de ida e volta,
                                com  duas noites em um hotel 4 estrela na cidade.</p>
                        </div>
                        <div class="d-flex justify-content-around p-3">
                            <a href="http://localhost:3000/Cadastro" className="btn btn-warning">Comprar</a>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4">
                        <img className='img' src="/img/SãoPaulo.jpg" alt="" />
                        <div><br />
                            <p class="d-flex justify-content-center">São Paulo</p>
                            <h3 class="d-flex justify-content-center">R$ 1700,00</h3>
                            <p class="text-justify"> Pacote para São Paulo com passagem de avião de ida e volta incluido,
                                com duas noites em um hotel 4 estrela na cidade.</p>
                        </div>
                        <div class="d-flex justify-content-around p-3">
                            <a href="http://localhost:3000/Cadastro" className="btn btn-warning">Comprar</a>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4">
                        <img className='img' src="/img/recife.jpg" alt="" />
                        <div><br />
                            <p class="d-flex justify-content-center">Recife</p>
                            <h3 class="d-flex justify-content-center">R$ 2600,00</h3>
                            <p class="text-justify"> Pacote para Recife, no pacote esta incluido passagem de avião de ida e volta, com  duas noites em um hotel 4 estrela na cidade.</p>
                        </div>
                        <div class="d-flex justify-content-around p-3">
                            <a href="http://localhost:3000/Cadastro" className="btn btn-warning">Comprar</a>
                        </div>
                    </div>
                </div><br />
                <div class="row">
                    <div class="col-sm-6 col-md-4 col-lg-4">
                        <img className='img' src="/img/maceio.jpg" alt="" />
                        <div><br />
                            <p class="d-flex justify-content-center">Maceio</p>
                            <h3 class="d-flex justify-content-center">R$ 2400,00</h3>
                            <p class="text-justify"> Pacote para Maceió, capital do estado de Alagoas, na costa leste do Brasil, o pacote esta incluido passagem de avião de ida e volta,
                                com  duas noites em um hotel 4 estrela na cidade.</p>
                        </div>
                        <div class="d-flex justify-content-around p-3">
                            <a href="http://localhost:3000/Cadastro" className="btn btn-warning">Comprar</a>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4">
                        <img className='img' src="/img/salvador.jpg" alt="" />
                        <div><br />
                            <p class="d-flex justify-content-center">Salvador</p>
                            <h3 class="d-flex justify-content-center">R$ 2200,00</h3>
                            <p class="text-justify">Pacote para Salvador, esta incluido passagem de avião de ida e volta, com  duas
                                noites em um hotel 4 estrela na cidade.</p>
                        </div>
                        <div class="d-flex justify-content-around p-3">
                            <a href="http://localhost:3000/Cadastro" className="btn btn-warning">Comprar</a>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-4">
                        <img className='img' src="/img/fortaleza.jpg" alt="" />
                        <div><br />
                            <p class="d-flex justify-content-center">Fortaleza</p>
                            <h3 class="d-flex justify-content-center">R$ 2500,00</h3>
                            <p class="text-justify"> Pacote para Fortaleza capital do estado do Ceará, esta incluido passagem de avião de ida e volta,
                                com  duas noites em um hotel 4 estrela na cidade.</p>
                        </div>
                        <div class="d-flex justify-content-around p-3">
                            <a href="http://localhost:3000/Cadastro" className="btn btn-warning">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </section>
    );

} export default Promocao;