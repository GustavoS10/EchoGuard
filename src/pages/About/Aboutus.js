import React, { useState } from 'react';
import {
    Container,
    Button,
    Row,
    Col
} from 'reactstrap';
import "./Aboutus.css";

function Aboutus() {
    return (
        <>
            <Container fluid id='About'>
                <div className='About'>
                    <Row>
                        <Col xs="12" md="6">
                            <h1>Sobre Nós</h1>
                            <div>
                                <p>A Empresa EchoGuard é uma  organização dedicada à proteção e restauração dos ecossistemas naturais
                                    em todo o mundo. Fundada há 15 anos, a empresa se concentra em pesquisa  científica, advocacy e
                                    projetos de conservação para garantir a  sobrevivência das espécies ameaçadas e a manutenção da biodiversidade
                                    global.
                                    Sua missão é combater a perda de habitat, a poluição e as  mudanças climáticas que ameaçam a vida selvagem e os
                                    sistemas naturais  do planeta. A empresa trabalha em estreita colaboração com governos,  comunidades locais e outras
                                    organizações ambientais para implementar  soluções sustentáveis e de longo prazo.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default Aboutus;