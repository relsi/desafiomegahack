import React, { Fragment, Component } from 'react';

import { 
        Badge, Card, CardImg, 
        CardBody, CardTitle, 
        CardText, CardSubtitle 
      } from 'reactstrap';
      import prod from '../prod.svg';

class Product extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-4"> 
              <Card>
                <CardImg top src={ prod } alt="Card image cap" />
                <CardBody>
                    <CardTitle><strong>R$ 1.500</strong> <span>25% OFF</span></CardTitle>
                    <CardSubtitle>12x 62,42 sem juros</CardSubtitle>
                    <CardText><strong>{this.props.category}</strong></CardText>
                </CardBody>
              </Card>
            </div>         
          </div>
        </div>
      </Fragment>
    ); 
  }
}
export default Product;