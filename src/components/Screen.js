require('styles/Screen.css');

import React from 'react';
import Tool from './Tool';
import Basic from './Basic';
import Skill from './Skill';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {

  }
  render() {
    let self = this;
    const skin = self.props.skin ? 'screen-' + self.props.skin : '';
    let component = {
      'basic': <Basic data={this.props.component.data}></Basic>,
      'skill': <Skill data={this.props.component.data}></Skill>
    };
    return (
      <div className={'screen '+ skin}>
        <div className="screen-container">
          {component[this.props.component.type]}
        </div>
      </div>
    );
  }
}

export default Screen;
