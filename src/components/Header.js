import React from 'react'
import logo from '../logo.svg'
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'

function Header(){
    return (
        <header>
            <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
            
            <Container>
                <Row noGutters className="position-relative w-100 align-items-left">
                <Col md={{ size: 2}} className="d-flex mr-3 justify-content-xs-start justify-content-lg-left" >
                    <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 120 }}>
                    <img src={logo} alt="logo" className="position-relative img-fluid" />
                    </NavbarBrand>
                </Col>
                <Col className="d-none d-lg-flex justify-content-left">
                    <Nav className="mrx-auto" navbar>
                    <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                        <DropdownToggle className="font-weight-bold" nav caret>Categorias</DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>Veículos</DropdownItem>
                        <DropdownItem>Beleza e Cuidados</DropdownItem>
                        <DropdownItem>Calçados e Roupas</DropdownItem>
                        <DropdownItem>Informatica</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Col>
                            
                <Col className="d-none d-lg-flex justify-content-start">
                    <Form inline>
                    <Input type="search" className="mr-1" placeholder="Insira seu endereço" />
                    <Button type="submit" color="info" outline>Enviar</Button>
                    </Form>
                </Col>
                
                </Row>
            </Container>
            
            </Navbar>
        </header>
    )
}
export default Header