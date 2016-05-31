require('styles/Demo.css');

import React from 'react';
import Tool from './Tool';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    let self = this;
    let items = this.props.data;
    return (
      <div className="demo">
        <div className="demo-container">
          <p className="demo-title">实践是检验真理的唯一标准</p>
          <div className="demo-group">
            <div className="demo-item">
              <span></span>
              <label>GOBANG</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
