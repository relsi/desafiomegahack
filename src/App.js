import React, {useState, useEffect } from 'react'
import {Container, Row, Col,  Card, CardImg, CardBody,
        CardTitle, CardSubtitle, Form, Input, Navbar, Nav,
        NavbarBrand, FormGroup
      } from 'reactstrap'
import axios from 'axios';
import './App.css'
import logo_img from './logo_img.jpg'
function App(){

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState({results:[]})
  const [productCategory, setProductCategory] = useState("MLB1403")
  const [productState, setProductState] = useState("TUxCUFJJT0xkYzM0")
  const [productCity, setProductCity] = useState("TUxCQ1BPUjgwZTJl")
  const [selectState, setSelectState] = useState({states:[]})
  const [selectCity, setSelectCity] = useState({cities:[]})

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`https://api.mercadolibre.com/classified_locations/countries/BR`)
      setSelectState(result.data);      
    }
    fetchData()
  }, []);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`https://api.mercadolibre.com/classified_locations/states/${productState}`)
      setSelectCity(result.data);      
    }
    fetchData()
  }, [productState]);

  useEffect(() => {
    async function fetchData(prodCategory, prodState, prodCity) {
      const result = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${prodCategory}&state=${prodState}&city=${prodCity}`)
      setProducts(result.data)
    }
    fetchData(productCategory, productState, productCity)
  }, [productCity]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`https://api.mercadolibre.com/sites/MLB/categories`)
      setCategories(result.data);   
    }
    fetchData()
  }, []);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${productCategory}&state=${productState}&city=${productCity}`)
      setProducts(result.data)
    }
    fetchData()
  }, []);

   async function changeCategory(prodCategory, prodState, prodCity) {
      const result = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${prodCategory}&state=${prodState}&city=${prodCity}`)
      setProducts(result.data)
  }

  return (
    <div>
      <header>
          <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
          <Container>
              <Row noGutters className="position-relative w-100 align-items-left">
              <Col md={{ size: 2}} className="d-flex mr-3 justify-content-xs-start justify-content-lg-left" >
                  <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 120 }}>
                  <img src={logo_img} alt="logo" className="position-relative img-fluid" />
                  </NavbarBrand>
              </Col>
              <Col className="d-none d-lg-flex justify-content-left">
                  <Nav className="mrx-auto" navbar>
                    <Form inline>
                      <FormGroup>
                      <Input 
                          type="select" 
                          name="selState" 
                          value={productState}
                          onChange={e => setProductState(e.target.value)}
                      >
                        <option>Selecione o Estado</option>
                        {selectState.states.map(state =>
                            <option value={state.id}>{state.name}</option>
                        )}
                      </Input>
                      </FormGroup>
                      <FormGroup>
                      <Input 
                          type="select" 
                          name="selCity" 
                          id="selCity" 
                          value={productCity}
                          onChange={e => setProductCity(e.target.value)}                      
                      >
                        <option>Selecione a Cidade</option>
                        {selectCity.cities.map(state =>
                            <option value={state.id}>{state.name}</option>
                        )}
                      </Input>
                      </FormGroup>
                    </Form>
                  </Nav>
              </Col>
              </Row>
          </Container>
          </Navbar>
      </header>

      <main className="my-5 py-5">
        <Container className="px-0">
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
  				<div className="col-md-4">
  					<div className="control-box p-3">
              <ul>
              {categories.map(category => 
                  <li>
                    <a href="#" onClick={() =>{
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
          <div className="col-md-8">
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