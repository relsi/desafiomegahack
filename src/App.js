import React, { Fragment, Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Products from './components/Products';
import Header from './components/Header';
import Categories from './components/Categories'

class App extends Component {

  state = {
    prodCategory: "Static Cat"
  }

  changeCategory(category){
    this.setState({prodCategory:category})
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
              <Categories />
  					</div>
  				</div>
          <div class="col-md-8">
              <Products category={this.state.prodCategory} />
          </div>
          </Row>
        </Container>
      </main>
    </Fragment>
  );
}
}
export default App;
