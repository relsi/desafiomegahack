import React, { Fragment, Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import Header from './components/Header';
import { 
  Badge, Card, CardImg, 
  CardBody, CardTitle, 
  CardText, CardSubtitle 
} from 'reactstrap';

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

    axios.get(`https://api.mercadolibre.com/sites/MLB/search?category=${this.state.prodCategory}&state=${this.state.prodState}&city=${this.state.prodCity}`)
    .then(res => {
        const products = res.data['results'];
        this.setState({ products });
    })
  }

  changeCategory(category){
   this.setState({loadingProducts:true})
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
            {this.state.loadingProducts ? (
                <h1>Aguarde. Carregando Produtos</h1>
            ) : (
            this.state.products.map(product =>
                <div className="row col-sm-12">
                  <div className="col-sm-4"> 
                    <Card>
                      <CardImg top src={ product.thumbnail } alt={ product.title } />
                      <CardBody>
                          <CardTitle><strong>R$ { product.price }</strong></CardTitle>
                          <CardSubtitle>{ product.title }</CardSubtitle>
                      </CardBody>
                    </Card>
                  </div>         
                </div>
              ))
            }              
          </div>
          </Row>
        </Container>
      </main>
    </Fragment>
  );
}
}
export default App;

