import React, { useState } from 'react';
import {
    Container,
    Button,
} from 'reactstrap';
import "./Main.css";
import Logo from '../../images/Logo.svg';

function Main() {


    return (
        <Container fluid className='Apresentacao' id='home'>
            <div id='Central'>
                <div id='Apresentacao'>
                    <h1>Protegendo o Futuro,<br /> Preservando o Presente</h1>
                    <p>
                        A EcoGuard tem o compromisso de adotar medidas e<br />
                        promover  ações que assegurem a sustentabilidade<br />
                        do nosso planeta para as  gerações futuras.
                    </p>
                    <Button id='btn-ap'>Assine nossas notícias!</Button>
                </div>
            </div>
            <div id='Central'>
                <div className='ImageApresentacao'>
                    <img src={Logo} />
                    <p>Protega o Futuro para as próximas gerações!</p>
                    
                </div>
            </div>
        </Container>
    );
}

export default Main;