import React from 'react';
import './tracker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import TrackerSingle from './Tracker-single.js';
import Button from 'react-bootstrap/Button';

class Tracker extends React.Component {
  constructor() {
    super();

    this.initiativeList = [<TrackerSingle />];

    this.state = {
      initList : this.initiativeList
    }

    this.addNewInitiative = this.addNewInitiative.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.lockAll = this.lockAll.bind(this);
  }
  addNewInitiative() {
    this.initiativeList.push(<TrackerSingle/>);
    this.setState({
      initList: this.initiativeList
    });

  }
  clearAll() {
    this.initiativeList = [];
    this.setState({
      initList: this.initiativeList
    });
  }
  lockAll() {

  }
  render() {
    return (
      <div className="tracker">
        <Row>
          <Col>
            <Form className="tracker-form">
              <ul class="initiative-list">
                {this.initiativeList}
              </ul>
              <Button variant="secondary" className="add-new" onClick={this.addNewInitiative}>Add New Initiative</Button>
              <Button variant="danger" className="clear-all" onClick={this.clearAll}>Clear All</Button>
              <Button variant="success" className="lock-all" onClick={this.lockAll}>Lock All</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}



export default Tracker;
