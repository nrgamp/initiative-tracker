import React from 'react';
import './tracker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TrackerSingle extends React.Component {
  constructor() {
    super();
    this.state = {
    isLocked : false,
    init: 0
    };
    this.setLocked = this.setLocked.bind(this);
  }
  setLocked () {
    const inverse = !this.state.isLocked;
    this.setState({
      isLocked : inverse
    });
  }
  
  render() {
    return (
        <Form.Row>
          <InputGroup className="mb-3">
          <InputGroup.Prepend >
            <InputGroup.Text className="drag-icon" draggable onDragStart={e => this.props.onDragStart(e, this.props.index)} onDragEnd={this.props.onDragEnd}><FontAwesomeIcon icon="bars" /></InputGroup.Text>
          </InputGroup.Prepend>
            <Form.Control disabled={this.state.isLocked} placeholder="Character" />
            <Form.Control disabled={this.state.isLocked} placeholder="Initiative" />
            <InputGroup.Append>
              <Button onClick={this.setLocked}>{this.state.isLocked ? <FontAwesomeIcon icon="unlock" /> : <FontAwesomeIcon icon="lock" />}</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Row>
    );
  }
}


export default TrackerSingle;
