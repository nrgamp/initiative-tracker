import React, { useState } from 'react';
import './tracker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { Draggable } from 'react-beautiful-dnd';
//import { Transition } from 'react-transition-group';

function TrackerSingle() {
  const [isLocked, setLocked] = useState(false);
  return (
    <li>
      <Form.Row className="tracker-single">
        <InputGroup className="mb-3">
        <InputGroup.Prepend >
          <InputGroup.Text className="drag-icon"><FontAwesomeIcon icon="bars" /></InputGroup.Text>
        </InputGroup.Prepend>
          <Form.Control disabled={isLocked} placeholder="Character" />
          <Form.Control disabled={isLocked} placeholder="Initiative" />
          <InputGroup.Append>
            <Button onClick={() => setLocked(!isLocked)}>{isLocked ? <FontAwesomeIcon icon="unlock" /> : <FontAwesomeIcon icon="lock" />}</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Row>
    </li>
  );
}


export default TrackerSingle;
