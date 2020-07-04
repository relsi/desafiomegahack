import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Products from './components/Products';
import Header from './components/Header';

function App() {
  return (
    <Fragment>

      <Header />

      <main className="my-5 py-5">
        <Container className="px-0">
          <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">

            <Col tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
              <Products />
            </Col>

          </Row>
        </Container>
      </main>

    </Fragment>
  );
}

export default App;
