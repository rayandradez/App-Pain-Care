import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logoAppWhite.svg';
import backIcon from '../../assets/images/icons/back.svg';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import CuidadorList from '../../components/CuidadorList';

function Cuidadores() {
    return (
        <div id="page-cuidadores" className="container">
            {/* <PageHeader/> */}
            <header className="page-header">
              <div className="top-bar-container">
                <Link to= "/"> 
                <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Cuidador" />      
              </div>

              <div className ="header-content">
                <strong>Cuidadores </strong>
              </div>
            </header> 
            <main>         
                  <CuidadorList/>
                  <CuidadorList/>
                  <CuidadorList/>
                  <CuidadorList/>
                  <span className="total-connections">
                Produzido por: E-brains Team
                </span>    
            </main>
               
        </div>
    )
}

export default Cuidadores;