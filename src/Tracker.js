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

    this.initiativeList = [-1];
    this.count = 0;

    this.state = {
      initList : this.initiativeList
    }

    this.addNewInitiative = this.addNewInitiative.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.nextPlayer = this.nextPlayer.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
  }
  addNewInitiative() {
    this.initiativeList.push(this.count++);
    this.setState({
      initList: this.initiativeList,
    });

  }
  clearAll() {
    this.initiativeList = [];
    this.setState({
      initList: this.initiativeList
    });
  }
  onDragOver = index => {
    const draggedOverItem = this.state.initList[index];
    //alert(draggedOverItem);

    // if the item is dragged over itself, ignore
    if (this.draggedItem  === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let item = this.state.initList.filter(item => item !== this.draggedItem );

    // add the dragged item after the dragged over item
    item.splice(index, 0, this.draggedItem );

    this.setState({ initList: item });
  }
  onDragStart = (e, idx) => {
    this.draggedItem = this.state.initList[idx];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.closest('.tracker-single'));
    e.dataTransfer.setDragImage(e.target.closest('.tracker-single'), 20, 20);
  }

  onDragEnd = () => {
    this.draggedIdx = null;
  }
  nextPlayer = () => {
    this.initiativeList = this.state.initList;
    const currentPlayer = this.initiativeList.shift();
    this.initiativeList.push(currentPlayer);
    this.setState({
      initList: this.initiativeList
    })
  }
  render() {
    return (
      <div className="tracker">
        <Row>
          <Col>
            <Form className="tracker-form">
              <ul class="initiative-list">
                {this.state.initList.map((item, idx) => (
                  <li key={item} className="tracker-single" onDragOver={() => this.onDragOver(idx)}>
                    {<TrackerSingle index={idx} onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} />}
                  </li>
                ))}
              </ul>
              <div class="utility-buttons">
                <Button variant="secondary" className="add-new" onClick={this.addNewInitiative}>Add New Initiative</Button>
                <Button variant="danger" className="clear-all" onClick={this.clearAll}>Clear All</Button>
                <Button variant="success" className="next-player" onClick={this.nextPlayer}>Next Player</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}



export default Tracker;
