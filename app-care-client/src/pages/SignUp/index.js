import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logoAppWhite.svg';
import backIcon from '../../assets/images/icons/back.svg';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import CuidadorList from '../../components/CuidadorList';

function SignUp() {
    return (
        <div id="page-cadastro" className="container">
            {/* <PageHeader/> */}
            <header className="page-header">
              <div className="top-bar-container">
                <Link to= "/"> 
                <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Cuidador" />      
              </div>
              <div className ="header-content">
                <strong>Cadastro</strong>
              </div>
            </header> 
            <main> 
               
            <fieldset>
                <div className="input-block">
                  <label htmlFor="id">ID/CRM</label>
                  <input type="text" id="text" />  
                  </div>

                  <div className="input-block">
                  <label htmlFor="name">Nome Completo*</label>
                  <input type="text" id="text" />  
                  </div>

                  <div className="input-block">
                  <label htmlFor="date">Data de Nascimento*</label>
                  <input type="date" id="date" />
                  </div>

                  <div className="input-block">
                  <label htmlFor="email">Email*</label>
                  <input type="email" id="email" />
                  </div>

                  <div className="input-block">
                  <label htmlFor="password">Senha*</label>
                  <input type="password" id="password" />
                  </div>

                  <div className="input-block">
                  <label htmlFor="password">Confirmar senha*</label>
                  <input type="password" id="password" />
                  </div>
                </fieldset>  
                <div className="buttons-container">
                <Link to="/" className="botao">
                    Cadastrar
                </Link>
                </div>             
                  
                  <span className="total-connections">
                Produzido por: E-brains Team
                </span>    
            </main>
               
        </div>
    )
}

export default SignUp;