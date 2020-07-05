import React, {useState, useEffect } from 'react'
import {Container, Row, Col,  Card, CardImg, CardText, CardBody,
        CardTitle, CardSubtitle, Form, Input, Navbar, Nav,
        NavbarBrand, UncontrolledDropdown,
        DropdownToggle, DropdownMenu, DropdownItem,
        Button, FormGroup, Label, FormText
      } from 'reactstrap'
import axios from 'axios';
import './App.css'
import logo from './logo.svg'
function App(){

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState({results:[]})
  const [productCategory, setProductCategory] = useState("MLB1403")
  const [productState, setProductState] = useState("TUxCUFJJT0xkYzM0")
  const [productCity, setProductCity] = useState("TUxCQ1BPUjgwZTJl")
  const [selectState, setSelectState] = useState({states:[]})

  useEffect(async () => {
    const result = await axios.get(`https://api.mercadolibre.com/classified_locations/countries/BR`)
    setSelectState(result.data);
    console.log(result.data)
  }, []);

  useEffect(async () => {
    const result = await axios.get(`https://api.mercadolibre.com/sites/MLB/categories`)
    setCategories(result.data);
  }, []);

  useEffect(async () => {
    const result = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=MLB1403&state=TUxCUFJJT0xkYzM0&city=TUxCQ1BPUjgwZTJl`)
    setProducts(result.data)
  }, []);

   async function changeCategory(prodCategory, prodState, prodCity) {
      const result = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${prodCategory}&state=${prodState}&city=${prodCity}`)
      setProducts(result.data)
  }

  function getState(params) {
    alert(params)
  }

  return (
    <div>
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
                    <Form inline>
                      <FormGroup>
                      <Input type="select" name="selState" id="selState">
                        <option>Selecione o Estado</option>
                        {selectState.states.map(state =>
                            <option>{state.name}</option>
                        )}
                      </Input>
                      </FormGroup>
                      <FormGroup>
                      <Input type="select" name="selCity" id="selCity">
                        <option>Selecione a Cidade</option>
                      </Input>
                      </FormGroup>
                    </Form>
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

      <main className="my-5 py-5">
        <Container className="px-0">
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
  				<div class="col-md-4">
  					<div class="control-box p-3">
              <ul>
              {categories.map(category => 
                  <li key={category.id}>
                    <a href="#" key={category.id} onClick={() =>{
                      setProductCategory(category.id)
                      changeCategory(
                        category.id,
                        productState,
                        productCity
                      )
                    }}>
                      {category.name}
                    </a>
                  </li>
                )
              }
              </ul>
  					</div>
  				</div>
          <div class="col-md-8">
            <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
              {products.results.map(product =>
                  <Col xs={{size:6}} className="product-card">
                    <Card >
                      <CardImg top src={ product.thumbnail } alt={ product.title } />
                      <CardBody>
                          <CardTitle><strong>R$ { product.price }</strong></CardTitle>
                          <CardSubtitle>{ product.title }</CardSubtitle>
                      </CardBody>
                    </Card>
                  </Col>
                )}
            </Row>
          </div>
          </Row>
        </Container>
      </main>
    </div>
  )
}
export default App