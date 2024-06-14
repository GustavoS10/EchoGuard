import React, { useState } from 'react';
import {
    Container,
    Button,
    Col,
    Row,
    Form,
    Label,
    Input,
    Tooltip,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import "./Form.css";
import FormImage from '../../images/FormImage.svg';

function Forms() {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [phone, setPhone] = useState('');

    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);
    const toggleModal = () => setModalOpen(!modalOpen);

    const handleSubmit = (event) => {
        event.preventDefault();
        toggleModal();
    }

    const handleConfirmSubmit = () => {
        console.log("formulario enviado");
        toggleModal();
    }

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        const numericValue = value.replace(/[^0-9]/g, '');
        setPhone(numericValue);
    }

    return (
        <Container fluid id='Forms'>
            <Row className="form-row align-items-center">
                <Col xs="12" md="6">
                    <div className="form-image">
                        <img src={FormImage} alt="Form" />
                    </div>
                </Col>
                <Col xs="12" md="6">
                    <div className="form-content">
                        <h2>Newsletter</h2>
                        <p>Assine para não perder nada!</p>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Col xs="12" md="6">
                                    <Label for="Nome">Nome</Label>
                                    <Input
                                        id="Nome"
                                        name="text"
                                        placeholder="João"
                                        type="text"
                                    />
                                </Col>
                                <Col xs="12" md="6">
                                    <Label for="Sobrenome">Sobrenome</Label>
                                    <Input
                                        id="Sobrenome"
                                        name="text"
                                        placeholder="Silva"
                                        type="text"
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xs="12" md="6">
                                    <Label for="Email">Email</Label>
                                    <Input
                                        id="Email"
                                        name="email"
                                        placeholder="joao@gmail.com"
                                        type="email"
                                    />
                                </Col>
                                <Tooltip
                                    placement="right"
                                    isOpen={tooltipOpen}
                                    target="Email"
                                    toggle={toggleTooltip}>
                                    Previnir erros ex: enviar email sem @gmail.com ou outro
                                </Tooltip>
                                <Col xs="12" md="6">
                                    <Label for="Telefone">Telefone</Label>
                                    <Input
                                        id="Telefone"
                                        name="text"
                                        placeholder="+55 11 99999-9999"
                                        type="text"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button id="submit-button" type="submit">
                                        Assinar!
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>

            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Confirmação de Envio</ModalHeader>
                <ModalBody>
                    Você tem certeza que deseja enviar este formulário?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleConfirmSubmit}>Confirmar</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default Forms;
