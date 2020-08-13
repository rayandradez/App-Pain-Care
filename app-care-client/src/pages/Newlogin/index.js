import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/global.css';
import logoImg from '../../assets/images/logoApp.svg';
import LandingImg from '../../assets/images/landingApp.svg';

import './styles.css';

function App () {
return (
    <div id="page-app">
        <div id="page-app-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Teste" />
                <h2>Especialistas em Dores Crônicas</h2>
            </div>
        
            <img src={LandingImg} 
                alt="Plataforma Teste" 
                className="hero-image" 
            />
            
            <main>
                <fieldset>
                
                <div className="input-block">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />  
                  </div>

                  <div className="input-block">
                  <label htmlFor="senha">Senha</label>
                  <input type="password" id="senha" />  
                  </div>
                </fieldset>                
            </main>
            <div className="buttons-container">
                <Link to="/appmenu" className="botao">
                    Entrar
                </Link>
                </div>
                <div className="cadastro">
                <Link to="/cadastro">
                    Ainda não tem conta? Cadastre-se
                </Link>
                </div>
               
                <span className="total-connections">
                Produzido por: E-brains Team
                </span>      

        </div>
    </div>
        
    );
;
}

export default App;