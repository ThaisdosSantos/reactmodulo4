import React from 'react';
import './style.css';

function Header() {
    return (
        <header className='corborda text-white'>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light  border-bottom box-shadow py-3">
                <div className="container">
                    <a className="navbar-brand text-white" href='http://localhost:3000/Home'>Travel Agency</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1 ">
                            <li className="nav-item">
                                <a className="nav-link text-white" href='http://localhost:3000/Home'>Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-white" href='http://localhost:3000/Destino'>Destino</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href='http://localhost:3000/Promocao'>Promoções</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href='http://localhost:3000/Contato'>Contatos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href='http://localhost:3000/Login'>Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;