import React, { Fragment, Component } from 'react';
import { Container, Row, Col,  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import axios from 'axios';
import Header from './components/Header';
import './App.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      prodCategory: "MLB1403",
      prodState: "TUxCUFJJT0xkYzM0",
      prodCity: "TUxCQ1BPUjgwZTJl",
      categories: [],
      products: [],
      loadingProducts: false
    }
    this.changeCategory = this.changeCategory.bind(this)
  }

  componentDidMount() {
    axios.get(`https://api.mercadolibre.com/sites/MLB/categories`)
    .then(res => {
        const categories = res.data;
        this.setState({ categories });
    })
    this.changeCategory(this.state.prodCategory)
  }

    changeCategory(category){
    this.setState({loadingProducts:true})
    this.setState({ products: [] });

    this.setState({prodCategory:category})
    axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${this.state.prodCategory}&state=${this.state.prodState}&city=${this.state.prodCity}`)
      .then(res => {
        const products = res.data['results'];
        this.setState({ products });
        this.setState({loadingProducts:false})

    })
  }

  render() {

  return (
    <Fragment>
      <Header />
      <main className="my-5 py-5">
        <Container className="px-0">
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
  				<div class="col-md-4">
  					<div class="control-box p-3">
            <ul>
              {this.state.categories.map(category => 
                 <a href="#" key={category.id} onClick={() => this.changeCategory(category.id)}>
                  <li>{category.name}</li>
                 </a>
                 )
              }
            </ul>
  					</div>
  				</div>
          <div class="col-md-8">
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
            
            {this.state.loadingProducts ? (

                <h1>Aguarde. Carregando Produtos</h1>
            ) : (

             this.state.products.map(product =>
                <Col xs={{size:6}} className="product-card">
                  <Card >
                    <CardImg top src={ product.thumbnail } alt={ product.title } />
                    <CardBody>
                        <CardTitle><strong>R$ { product.price }</strong></CardTitle>
                        <CardSubtitle>{ product.title }</CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              ))
            }
          </Row>

          </div>
          </Row>
        </Container>
      </main>
    </Fragment>
  );
}
}
export default App;

