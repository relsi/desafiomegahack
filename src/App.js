import React, {Fragment, useState, useEffect } from 'react';
import { Container, Row, Col,  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import axios from 'axios';
import Header from './components/Header';
import './App.css'

function App(){
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({results:[]});

  useEffect(async () => {
    const result = await axios.get(`https://api.mercadolibre.com/sites/MLB/categories`)
    setCategories(result.data);
  }, []);

  useEffect(async () => {
    const prodResult = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=MLB1403&state=TUxCUFJJT0xkYzM0&city=TUxCQ1BPUjgwZTJl`)
    setProducts(prodResult.data)
  }, []);

  async function changeCategory(category) {
      const prodResult = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${category}&state=TUxCUFJJT0xkYzM0&city=TUxCQ1BPUjgwZTJl`)
      setProducts(prodResult.data)
  }

  return (
    <Fragment>
      <Header />
      <main className="my-5 py-5">
        <Container className="px-0">
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
  				<div class="col-md-4">
  					<div class="control-box p-3">
            <ul>
              {categories.map(category => 
                 <a href="#" key={category.id} onClick={() => changeCategory(category.id)}> 
                  <li>{category.name}</li>
                 </a>
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
    </Fragment>
  )
}
export default App;

