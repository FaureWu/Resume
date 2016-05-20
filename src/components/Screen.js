require('styles/Screen.css');

import React from 'react';
import Tool from './Tool';
import Basic from './Basic';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    var screen = this.refs.screen;
    screen.style.height = this.props.height+'px';
  }
  render() {
    let self = this;
    const skin = self.props.skin ? 'screen-' + self.props.skin : '';
    let component = {
      'basic': <Basic></Basic>
    };
    return (
      <div className={'screen '+ skin} ref="screen">
        <div className="screen-container">
          {component[this.props.component.type]}
        </div>
      </div>
    );
  }
}

export default Screen;
