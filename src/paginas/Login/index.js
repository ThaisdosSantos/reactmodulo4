import React from "react";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import './style.css'

function Login() {
    return (
        <div className="Container">
            <Header />
            <section class="d-flex justify-content-center align-items-center altura">
                <main class="form-signin col-11 col-sm-8 col-md-6 col-lg-4 cor-secundaria">
                    <form className="text-white my-5">
                        <div class="form-floating mb-2">
                            <label for="floatingInput">Nome</label>
                            <input type="text" class="form-control" id="floatingName" placeholder="name" />
                        </div>

                        <div class="form-floating mb-2">
                            <label for="floatingInput">Email</label>
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        </div>
                        <div class="form-floating mb-2">
                            <label for="floatingPassword">Senha</label>
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <button class="w-100 btn btn-lg " type="submit">Login</button>
                        </div>
                    </form>
                </main>
            </section>
            <br></br>
            <Footer />
        </div>
    );

} export default Login;