import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tracker from './Tracker.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faLock, faUnlock);

function App() {
  return (
    <div className="App-header">
    <Container >
      <Row>
        <Col>
          Initiative Tracker
          <hr />
          <Tracker/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
