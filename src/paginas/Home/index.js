import React from "react";
import './style.css'
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer'
import Imagem from './componentes/Imagem';
import Texto from "./componentes/Texto";

function Home(){
    return(
        <div>
            <Header/>
            <Imagem/>
            <Texto/>           
           <Footer/>
        </div>
            
        
    );

} export default Home;