import React from 'react';
import {
  Button,
  Container
} from 'reactstrap';
import Logo from '../images/Logo.png'
import './Page.css'
function Page() {
  return (
    <>
      <Container fluid id='ContainerFluid'>
        <div id='tittles'>
          <h1>Protegendo o Futuro, Preservando o Presente</h1>
          <h2>
            A EchoGuard tem o compromisso de adotar medidas e promover ações que
            assegurem a sustentabilidade do nosso planeta
            para as gerações futuras.
          </h2>
          <button id='btnNews'>Assine nossas notícias</button>
        </div>
        <div id='logo'>
          <img src={Logo} id='image' alt="Logo EchoGuard" />
          <p>Dúvidas Sobre o Site?</p>
          <p>Acesse o Guia do Site</p>          
          <button id='btnNews2'>Guia do Site</button>
        </div>
      </Container>
    </>
  );
}

export default Page;
