import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TableLoading } from '../.';
import { Container, Row, Col, Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Table className='mt-3' striped bordered>
            <thead>
              <tr>
                <th>First column</th>
                <th>Second column</th>
                <th>Third column</th>
              </tr>
            </thead>
            <TableLoading
              columns={[
                { min: 2, max: 6 },
                { min: 3, max: 10 },
                { min: 3, max: 8 }
              ]}
              lines={4}
            />
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
