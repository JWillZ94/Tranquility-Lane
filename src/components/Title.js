import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }

    this.sprintStart = this.sprintStart.bind(this);
  }

  sprintStart() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
  }

  render() {
    return (
      <div className="title">
        <h1 className={this.state.active ? 'title-sprint' : 'title-main'} onClick={this.sprintStart}>
          Track and Field
          <span className="tooltip-text-2">Set!...</span>
        </h1>
        <h2 className={this.state.active ? 'title-go' : 'title-sub'}>
          Tranquility Lane
          <span className="tooltip-text">On your marks...</span>
          <span className="tooltip-text-3">GO!!!</span>
        </h2>
        <p>A Showcase for Track & Field Facilities</p>
      </div>
    );
  }
}

export default Title;
